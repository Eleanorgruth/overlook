class RoomDirectory {
  constructor(allRoomData) {
    this.rooms = allRoomData
    this.filteredRooms = []
  }
  findAvalibleRooms(date, roomType, bookingData) {
    const filteredRooms = this.rooms.reduce((avalibleRooms, room) => {
     const roomNumbersBooked = bookingData.reduce((roomNumbersBooked, booking)=> {
      const date2 = new Date(date)  
      const date1 = new Date(booking.date)
      if (date1.getTime() === date2.getTime()) {
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
  }
}

export default RoomDirectory