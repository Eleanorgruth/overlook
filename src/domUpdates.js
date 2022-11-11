import { roomDirectory, apiBookings} from "./scripts"

const myBookingView = document.querySelector('#myBookings')
const bookARoomView = document.querySelector('#bookARoom')
const bookingForm = document.querySelector('#bookingForm')
const bookingOptions = document.querySelector('#bookingInfo')
const welcomeMessage = document.querySelector('#welcomeMessage')
const bookedRoomsList = document.querySelector('#bookedRoomsList')
const totalSpent = document.querySelector('#totalSpent')
const dateSelection = document.querySelector('#dateSelection')
const roomTypeSelection = document.querySelector('#roomTypeSelection')
const searchRoom = document.querySelector('#searchRoom')


function setMinimumDate() {
  dateSelection.min = new Date().toLocaleDateString('en-ca')
}

bookARoomView.addEventListener('click', displayBookingOptions)
myBookingView.addEventListener('click', displayMyBookings)
searchRoom.addEventListener('click', filterAvailableRooms)
//DOM Updates
function displayBookingOptions() {
  show([bookingForm, bookingOptions])
  hide([bookedRoomsList])
  selected(bookARoomView)
  unselected(myBookingView)
}

function displayMyBookings() {
  selected(myBookingView)
  unselected(bookARoomView)
  hide([bookingForm, bookingOptions])
  show([bookedRoomsList])
}

function displayWelcomeMessage(customerName) {
  welcomeMessage.innerText = `Welcome ${customerName}`
}

function displayBookedRoomsList(customer) {
  show([bookedRoomsList])
  totalSpent.innerText = `Total Spent: $${customer.totalCost.toFixed(2)}`
  bookedRoomsList.innerHTML = ''
  customer.bookings.forEach((booking)=> {
    bookedRoomsList.innerHTML += `
    <section class="bookings" id="bookings">
     <p>${booking.bookingStatus}: Room Number: ${booking.roomNumber}</p>
     <p>Room Info: ${booking.numBeds} ${booking.bedSize}
      bed(s), ${booking.bidetMessage}</p>
     <p>Date: ${booking.date}</p>
     <p>Cost Per Night: $${booking.costPerNight}</p>
    </section>
    `
  })
}

function filterAvailableRooms() {
  event.preventDefault()
  roomDirectory.findAvalibleRooms(dateSelection.value, roomTypeSelection.value, apiBookings)
  console.log(roomDirectory.filteredRooms)
  bookingOptions.innerHTML = ''
  roomDirectory.filteredRooms.forEach((bookingOption)=>{
    bookingOptions.innerHTML += `
    <section class="booking-option">
    <p>Room Number: ${bookingOption.number}</p>
    <p>Room Info: ${bookingOption.roomType} with ${bookingOption.numBeds} ${bookingOption.bedSize}
    bed(s)</p>
    <p>Room Cost: $${bookingOption.costPerNight}</p>
    <p>Room Date ${dateSelection.value}</p>
    <button class="book-room-btn">Book Room</button>
  </section>
    `
  })
}
//DOM HELPER FUNCTIONS
function hide(elementList) {
  elementList.forEach((currentElement) => {
    currentElement.classList.add('hidden')
  })
}

function show(elementList) {
  elementList.forEach((currentElement) => {
    currentElement.classList.remove('hidden')
  })
}
function selected(currentElement) {
  currentElement.classList.add('selected')
}
function unselected(currentElement) {
  currentElement.classList.remove('selected')
}

export { displayWelcomeMessage, displayBookedRoomsList, setMinimumDate }