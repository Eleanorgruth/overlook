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

export { getData }