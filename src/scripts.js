// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image 
//(also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/overlook-background-image.png'


console.log('This is the JavaScript entry file - your code begins here.');

const myBookingView = document.querySelector('#myBookings')
const bookARoomView = document.querySelector('#bookARoom')
const bookingForm = document.querySelector('#bookingForm')
const bookingOptions = document.querySelector('#bookingInfo')
const myBookings = document.querySelector('#bookings')

bookARoomView.addEventListener('click', displayBookingOptions)
myBookingView.addEventListener('click', displayMyBookings)


function displayBookingOptions() {
  show([bookingForm, bookingOptions])
  hide([myBookings])
  selected(bookARoomView)
  unselected(myBookingView)
}

function displayMyBookings() {
  selected(myBookingView)
  unselected(bookARoomView)
  hide([bookingForm, bookingOptions])
  show([myBookings])
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