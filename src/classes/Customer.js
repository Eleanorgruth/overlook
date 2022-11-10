import Booking from "./Booking"

class Customer {
  constructor(customerData, bookingData, roomData) {
    this.id = customerData.id
    this.name = customerData.name
    this.bookings = this.getBookingsList(bookingData, roomData) 
    this.totalCost = this.getTotalCost()
  }
  getBookingsList(bookingData, roomData) {
    const bookings = bookingData.filter((booking)=>{
      return booking.userID === this.id
    })
    const bookingInfo = bookings.map((booking) => {
      return new Booking(booking, roomData)
    })
    return bookingInfo.sort((a, b) => {
       return b.reformattedDate - a.reformattedDate
    })
  }
  getTotalCost() {
    return this.bookings.reduce((totalCost, booking)=>{
      totalCost += booking.costPerNight
      return totalCost
    }, 0)
  }
}

export default Customer