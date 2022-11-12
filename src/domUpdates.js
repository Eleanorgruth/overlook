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
const userFeedback = document.querySelector('#userFeedback')


function setMinimumDate() {
  dateSelection.min = new Date().toLocaleDateString('en-ca')
}

bookARoomView.addEventListener('click', displayBookingOptions)
myBookingView.addEventListener('click', displayMyBookings)
searchRoom.addEventListener('click', filterAvailableRooms)

//DOM Updates

function displayBookingOptions() {
  userFeedback.innerText = 'Please select a date and room type to view available rooms'
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
  updateBookedRoomsList(customer)
  show([bookedRoomsList])
}

function updateBookedRoomsList(customer) {
  hide([bookedRoomsList])
  totalSpent.innerText = `Total Spent: $${customer.totalCost.toFixed(2)}`
  bookedRoomsList.innerHTML = ''
  customer.bookings.forEach((booking)=> {
    bookedRoomsList.innerHTML += `
    <section class="bookings" id="${booking.id}" tabindex='0'>
     <p>${booking.bookingStatus}: Room Number: ${booking.roomNumber} ${booking.roomType}</p>
     <p>Room Info: ${booking.numBeds} ${booking.bedSize}
      bed(s)</p>
     <p>Date: ${booking.date}</p>
     <p>Cost Per Night: $${booking.costPerNight}</p>
    </section>
    `
  })
  roomTypeSelection.value = 'Choose Type...'
  dateSelection.value = ''

}

function filterAvailableRooms(event) {
  event.preventDefault()
  if(dateSelection.value === '') {
    userFeedback.innerText = "Please select a date to book a room"
  } else if(roomDirectory.filteredRooms === []) {
    userFeedback.innerText = "Sorry,there are no room available that meet your search criteria. Please try again."
  } else {
    roomDirectory.findAvalibleRooms(dateSelection.value, roomTypeSelection.value, apiBookings)
    console.log(roomDirectory.filteredRooms)
    bookingOptions.innerHTML = ''
    roomDirectory.filteredRooms.forEach((bookingOption)=>{
      bookingOptions.innerHTML += `
      <section class="booking-option" tabindex='0'>
      <p>Room Number: ${bookingOption.number}</p>
      <p>Room Info: ${bookingOption.roomType} with ${bookingOption.numBeds} ${bookingOption.bedSize}
      bed(s)</p>
      <p>Room Cost: $${bookingOption.costPerNight}</p>
      <p>Room Date ${dateSelection.value}</p>
      <button class="book-room-btn" id="${bookingOption.number}">Book Room</button>
    </section>
      `
    })
  }
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
function giveUserError() {
  userFeedback.innerText = `Oops, something went wrong. Try again later.`
}

export { giveUserError, userFeedback, hide, displayWelcomeMessage, displayBookedRoomsList, setMinimumDate, bookingOptions, dateSelection, bookedRoomsList, updateBookedRoomsList, filterAvailableRooms}