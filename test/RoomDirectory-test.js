import chai from 'chai'
const expect = chai.expect
import RoomDirectory from '../src/classes/RoomDirectory'
import {
  sampleBookingData,
  sampleRoomData
} from '../src/data/sample-data'


describe('RoomDirectory', () => {
  sampleBookingData
  sampleRoomData
  let roomDirectory,
    room1,
    room2,
    room3,
    room4

  beforeEach(() => {
    roomDirectory = new RoomDirectory(sampleRoomData, sampleBookingData)
    room1 = sampleRoomData[0]
    room2 = sampleRoomData[1]
    room3 = sampleRoomData[2]
    room4 = sampleRoomData[3]
    sampleBookingData
    sampleRoomData
  })
  it('should be a function', () => {
    expect(RoomDirectory).to.be.a('function');
  })
  it('should hold an array of room objects', () => {
    expect(roomDirectory.rooms).to.deep.equal(sampleRoomData)
  })
  it('should hold an array of booking objects', () => {
    expect(roomDirectory.bookings).to.deep.equal(sampleBookingData)
  })
  it('should have a filteredRooms property default to an empty array', () => {
    expect(roomDirectory.filteredRooms).to.deep.equal([])
  })
  it('should be able to filter the avalible rooms by date and type', () => {
    roomDirectory.findAvalibleRooms("2022/02/02", "all", sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([room1, room2, room4])
    roomDirectory.findAvalibleRooms("2022/02/15", "junior suite",
      sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([room2])
    roomDirectory.findAvalibleRooms("2022/02/15", "residential suite", 
      sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([room4])
    roomDirectory.findAvalibleRooms("2023/02/14", "single room",
      sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([room1, room3])
  })
  it('should be an empty array if no rooms meet the search criteria', () => {
    roomDirectory.findAvalibleRooms("2022/01/22", "junior suite",
      sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([])
    roomDirectory.findAvalibleRooms("2023/02/14", "residential suite",
      sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([])
  })
})