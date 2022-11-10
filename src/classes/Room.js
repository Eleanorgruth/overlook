class Room {
  constructor(roomInfo) {
    this.roomNumber = roomInfo.number
    this.roomType = roomInfo.roomType
    this.bidetStatus = roomInfo.bidet
    this.bedSize = roomInfo.bedSize
    this.numBeds = roomInfo.numBeds
    this.costPerNight = roomInfo.costPerNight
    // this.allBookingsInfo = allBookingsInfo
    // this.bookingsInfo = []
  }
  // getBookingInfo() {
  //   const currentRoomBookings = this.allBookingsInfo.filter((booking)=>{
  //     return booking.roomNumber === this.roomNumber
  //   })
  //   this.bookingsInfo = currentRoomBookings
  // }
}

export default Room