class RoomDirectory {
  constructor(allRoomData, allBookingsData) {
    this.rooms = allRoomData 
    this.bookings = allBookingsData
    this.filteredRooms = []
  }
  findAvalibleRooms(date, roomType) {
    const filteredRooms = this.rooms.reduce((avalibleRooms, room) => {
     const roomNumbersBooked = this.bookings.reduce((roomNumbersBooked, booking)=> {
      if (date.split('-').join('/') === booking.date) {
       roomNumbersBooked.push(booking.roomNumber)
      }
       return roomNumbersBooked
      }, [])
      if (!roomNumbersBooked.includes(room.number)) {
         avalibleRooms.push(room)
      }
      return avalibleRooms
    }, []).filter((room)=>{
      if (roomType === room.roomType) {
         return room
      } else if (roomType === "all" || roomType === "Choose Type...") {
        return room
      }
    })
    this.filteredRooms = filteredRooms
    return this.filteredRooms
  }
}

export default RoomDirectory