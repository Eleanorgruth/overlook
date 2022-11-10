import RoomDirectory from "./RoomDirectory"

class Booking {
  constructor(bookingInfo, roomData) {
    this.id = bookingInfo.id
    this.userID = bookingInfo.userID
    this.date = bookingInfo.date
    this.reformattedDate = this.reformatDate()
    this.roomNumber = bookingInfo.roomNumber
    this.roomType = this.findRoomType(roomData)
    this.bidet = this.findRoomBidet(roomData)
    this.bedSize = this.findRoomBedSize(roomData)
    this.numBeds = this.findRoomNumBeds(roomData)
    this.costPerNight = this.findRoomCostPerNight(roomData)
  }
  reformatDate() {
  const date = new Date(this.date)
   return date.getTime()
  }
  findRoom(room) {
    const roomDirectory = new RoomDirectory(room)
    return roomDirectory.rooms.find((room) => {
      return room.roomNumber === this.roomNumber
    })
  }
  findRoomType(room) {
    return this.roomType = this.findRoom(room).roomType
  }
  findRoomBidet(room) {
    return this.bidet = this.findRoom(room).bidetStatus
  }
  findRoomBedSize(room) {
    return this.bedSize = this.findRoom(room).bedSize
  }
  findRoomNumBeds(room) {
    return this.numBeds = this.findRoom(room).numBeds
  }
  findRoomCostPerNight(room) {
    return this.costPerNight = this.findRoom(room).costPerNight
  }
}

export default Booking