const myBookingView = document.querySelector('#myBookings')
const bookARoomView = document.querySelector('#bookARoom')
const bookingForm = document.querySelector('#bookingForm')
const bookingOptions = document.querySelector('#bookingInfo')
const myBookings = document.querySelector('#bookings')
const welcomeMessage = document.querySelector('#welcomeMessage')

bookARoomView.addEventListener('click', displayBookingOptions)
myBookingView.addEventListener('click', displayMyBookings)

//DOM Updates
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

function displayWelcomeMessage(customerName) {
  welcomeMessage.innerText = `Welcome ${customerName}`
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

export { displayWelcomeMessage }