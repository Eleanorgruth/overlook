import Customer from "./classes/Customer"
import { bookingURL, displayBookedRoomsList, customer, apiRooms, getCustomerData } from "./scripts"

const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
    .catch(err => {
      console.log('Fetch Error: ', err)
    })
}

const postBooking = (postData) => {
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
        console.log("DATA", data)
        const test1 = getCustomerData(customer)
       const newCustomer = new Customer(test1, data.bookings, apiRooms)
       displayBookedRoomsList(newCustomer)
      })
      .catch(err => {
          console.log('Fetch Error: ', err)
      })
}

export { getData, postBooking }