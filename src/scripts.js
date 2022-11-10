
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image 
//(also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/overlook-background-image.png'
import Customer from './classes/Customer';
import { displayBookedRoomsList, displayWelcomeMessage } from './domUpdates';
import { getData } from './apiCalls';

const customersURL = 'http://localhost:3001/api/v1/customers'
const roomURL = 'http://localhost:3001/api/v1/rooms'
const bookingURL = 'http://localhost:3001/api/v1/bookings'

let apiCustomers
let apiRooms
let apiBookings 
let randomCustomer
let customer

window.addEventListener('load', fetchData([customersURL, roomURL, bookingURL]))

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]), getData(urls[2])])
    .then(data => {
      apiCustomers = data[0].customers
      apiRooms = data[1].rooms
      apiBookings = data[2].bookings
      randomizeUser(apiCustomers, apiBookings, apiRooms)
      displayBookedRoomsList(customer)
    })
}

//Other Functions
function randomizeUser(customerData, bookingData, roomData) {
  randomCustomer = customerData[Math.floor(Math.random() * customerData.length)]
  customer = new Customer(randomCustomer, bookingData, roomData)
  displayWelcomeMessage(customer.name)
  return customer
}

export {customer}