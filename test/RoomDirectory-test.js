import chai from 'chai';
import RoomDirectory from '../src/classes/RoomDirectory';
import { sampleBookingData, sampleCustomerData, sampleRoomData } from '../src/data/sample-data';
const expect = chai.expect;


describe('RoomDirectory', () => {
  sampleBookingData
  sampleRoomData
  let roomDirectory, room1, room2, room3, room4

  beforeEach(() => {
    roomDirectory = new RoomDirectory(sampleRoomData)
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
  it('should have a property of rooms which holds an array of Room instances', () => {
    expect(roomDirectory.rooms).to.deep.equal(sampleRoomData)
  })
  it('should be able to filter the avalible rooms', () => {
    roomDirectory.findAvalibleRooms("2022/02/02", "all", sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([room1, room2, room4])
    roomDirectory.findAvalibleRooms("2022/02/15", "all", sampleBookingData)
    expect(roomDirectory.filteredRooms).to.deep.equal([room2, room3, room4])
  })
})