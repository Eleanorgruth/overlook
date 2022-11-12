
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image 
//(also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/overlook-background-image.png'
import Customer from './classes/Customer';
import { displayBookedRoomsList, displayWelcomeMessage, setMinimumDate, bookingOptions, dateSelection } from './domUpdates';
import { getData, postBooking } from './apiCalls';
import RoomDirectory from './classes/RoomDirectory';

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
      roomDirectory = new RoomDirectory(apiRooms)
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
    postBooking(postData)
   
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
export {customer, roomDirectory, apiBookings, bookingURL, displayBookedRoomsList, apiRooms, getCustomerData }