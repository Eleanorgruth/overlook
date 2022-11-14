import './css/styles.css'
import './images/overlook-background-image.png'
import Customer from './classes/Customer'
import {
  displayBookedRoomsList,
  setMinimumAndMaximumDate,
  bookingOptions,
  dateSelection,
  updateBookedRoomsList,
  bookingConfirmation,
  displayMyBookings,
  giveUserError,
  show,
} from './domUpdates'
import { getData } from './apiCalls'
import RoomDirectory from './classes/RoomDirectory'

let customersURL = 'http://localhost:3001/api/v1/customers/'
const roomURL = 'http://localhost:3001/api/v1/rooms'
const bookingURL = 'http://localhost:3001/api/v1/bookings'

let apiCustomers
let apiRooms
let apiBookings 
let customer
let roomDirectory

const signInButton = document.querySelector('#signInButton')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const signInErorr = document.querySelector('#signInErorr')

signInButton.addEventListener('click', checkSignInInfo)
bookingOptions.addEventListener('click', bookRoom)

passwordInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkSignInInfo()
  }
})

function checkSignInInfo() {
  let username = usernameInput.value.slice(0, 8) 
  let usernameID = Number(usernameInput.value.slice(8))
  if (username === "customer" && usernameID > 0 && usernameID <= 50
   && passwordInput.value === "overlook2021") {
    let customerURL = customersURL + usernameID
    fetchData([customerURL, roomURL, bookingURL])
  } else {
    show([signInErorr])
  }
}

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]), getData(urls[2])])
    .then(data => {
      apiCustomers = data[0]
      apiRooms = data[1].rooms
      apiBookings = data[2].bookings
      customer = new Customer(apiCustomers, apiBookings, apiRooms)
      displayBookedRoomsList(customer)
      setMinimumAndMaximumDate()
      roomDirectory = new RoomDirectory(apiRooms, apiBookings)
    })
    .catch(err => {
      giveUserError()
      console.log('Fetch Error: ', err)
    })
}

function bookRoom(event) {
  if (event.target.classList[0] === 'book-room-btn') {
    const postData = {
      userID: customer.id,
      date: getDateForPost(dateSelection.value),
      roomNumber: Number(event.target.id)
    }
    return fetch(bookingURL, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}: ${response.statusText}`)
        }
        return response.json()
      })
      .then(() => getData(bookingURL))
      .then(data => {
        customer = new Customer(apiCustomers, data.bookings, apiRooms)
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

function getDateForPost(date) {
  return date.split('-').join('/')
}

export {
  customer,
  roomDirectory,
  apiBookings,
  bookingURL,
  displayBookedRoomsList,
  apiRooms,
  getDateForPost
}