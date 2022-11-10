import chai from 'chai';
import Room from '../src/classes/Room';
// import Customer from '../src/classes/Customer';
import RoomDirectory from '../src/classes/RoomDirectory';
import { sampleBookingData, sampleCustomerData, sampleRoomData } from '../src/data/sample-data';
const expect = chai.expect;


describe('RoomDirectory', () => {
  sampleBookingData
  sampleRoomData
  let roomDirectory, room1, room2, room3, room4

  beforeEach(() => {
    roomDirectory = new RoomDirectory(sampleRoomData)
    room1 = new Room(sampleRoomData[0])
    room2 = new Room(sampleRoomData[1])
    room3 = new Room(sampleRoomData[2])
    room4 = new Room(sampleRoomData[3])
    sampleBookingData
    sampleRoomData
  })
  it('should be a function', () => {
    expect(RoomDirectory).to.be.a('function');
  })
  it('should have a property of rooms which holds an array of Room instances', () => {
    expect(roomDirectory.rooms).to.deep.equal([room1, room2, room3, room4])
  })
})