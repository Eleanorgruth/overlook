import './css/styles.css'
import './images/overlook-background-image.png'
import Customer from './classes/Customer'
import { displayBookedRoomsList, displayWelcomeMessage, setMinimumDate, bookingOptions, dateSelection, updateBookedRoomsList, bookingConfirmation, displayMyBookings } from './domUpdates'
import { getData } from './apiCalls'
import RoomDirectory from './classes/RoomDirectory'

const customersURL = 'http://localhost:3001/api/v1/customers'
const roomURL = 'http://localhost:3001/api/v1/rooms'
const bookingURL = 'http://localhost:3001/api/v1/bookings'

let apiCustomers
let apiRooms
let apiBookings 
let randomCustomer
let customer
let roomDirectory

window.addEventListener('load', fetchData([customersURL, roomURL, bookingURL]))
bookingOptions.addEventListener('click', bookRoom)

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]), getData(urls[2])])
    .then(data => {
      apiCustomers = data[0].customers
      apiRooms = data[1].rooms
      apiBookings = data[2].bookings
      randomizeUser(apiCustomers, apiBookings, apiRooms)
      displayBookedRoomsList(customer)
      setMinimumDate()
      roomDirectory = new RoomDirectory(apiRooms, apiBookings)
    })
}

//Other Functions
function randomizeUser(customerData, bookingData, roomData) {
  randomCustomer = customerData[Math.floor(Math.random() * customerData.length)]
  customer = new Customer(randomCustomer, bookingData, roomData)
  displayWelcomeMessage(customer.name)
  return customer
}

function bookRoom(event) {
  if (event.target.classList[0] === 'book-room-btn') {
    const postData = {userID: customer.id, date: getDateForPost(dateSelection.value), roomNumber: Number(event.target.id)}
    console.log(postData)
    return fetch(bookingURL, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' }
  })
      .then(response => {
          if (!response.ok) {
            throw new Error(`Sorry, something went wrong. ${response.status}: ${response.statusText}`)
          }
          return response.json()
      })
      .then(test => getData(bookingURL))
      .then(data => {
        console.log("DATA", data.bookings)
       customer = new Customer(getCustomerData(customer), data.bookings, apiRooms)
       updateBookedRoomsList(customer)
       roomDirectory = new RoomDirectory(apiRooms, data.bookings)
       bookingConfirmation()
       setTimeout(()=>{
        displayMyBookings()
       }, 3000)
      })
      .catch(err => {
        giveUserError()
        console.log('Fetch Error: ', err)
      })
  }
}

function getCustomerData(customer) {
  return apiCustomers.find((currentCustomer)=> {
    return currentCustomer.id === customer.id
  })
}
function getDateForPost(date) {
 return date.split('-').join('/')
}
export {customer, roomDirectory, apiBookings, bookingURL, displayBookedRoomsList, apiRooms, getCustomerData, getDateForPost }