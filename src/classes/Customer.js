import Booking from "./Booking"

class Customer {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.bookings = []
    // this.upcomingBookings = []
    // this.pastBookings = []
  }
  getBookingsList(bookingData, roomData) {
    const bookings = bookingData.filter((booking)=>{
      return booking.userID === this.id
    })
    const bookingInfo = bookings.map((booking) => {
      return new Booking(booking, roomData)
    })
    this.bookings = bookingInfo.sort((a, b) => {
       return a.reformattedDate - b.reformattedDate
    })
  }
}

export default Customer