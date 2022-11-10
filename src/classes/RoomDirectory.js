import Room from "./Room"

class RoomDirectory {
  constructor (allRoomData) {
    this.rooms = this.createRooms(allRoomData)
  }
 createRooms(allRoomData) {
  return allRoomData.map((roomInfo) => {
    return new Room(roomInfo)
  })
 }
}

export default RoomDirectory