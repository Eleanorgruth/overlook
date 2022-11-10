import chai from 'chai';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';
import RoomDirectory from '../src/classes/RoomDirectory';
import { sampleBookingData, sampleCustomerData, sampleRoomData } from '../src/data/sample-data';
const expect = chai.expect;


describe('Booking', () => {
  sampleBookingData
  sampleRoomData
  let booking1
  //let roomDirectory, room1, room2, room3, room4

  beforeEach(() => {
    booking1 = new Booking(sampleBookingData[0], sampleRoomData)
    // room1 = new Room(sampleRoomData[0])
    // room2 = new Room(sampleRoomData[1])
    // room3 = new Room(sampleRoomData[2])
    // room4 = new Room(sampleRoomData[3])
    sampleBookingData
    sampleRoomData
  })
  it('should be a function', () => {
    expect(Booking).to.be.a('function')
  })
  it('should hold the booking id', () => {
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6x8')
  })
  it('should hold the user id', () => {
    expect(booking1.userID).to.equal(1)
  })
  it('should hold the date', () => {
    expect(booking1.date).to.equal("2023/01/11")
  })
  it('should hold the reformatted date', () => {
    expect(booking1.reformattedDate).to.equal(1673420400000)
  })
  it('should hold the room number', () => {
    expect(booking1.roomNumber).to.equal(20)
  })
  it('should hold the room type', () => {
    //booking1.findRoomInfo(sampleRoomData)
    expect(booking1.roomType).to.equal("residential suite")
  })
  it('should hold the bidet status', () => {
    //booking1.findRoomInfo(sampleRoomData)
    expect(booking1.bidet).to.equal(false)
  })
  it('should hold the bed size', () => {
    //booking1.findRoomInfo(sampleRoomData)
    expect(booking1.bedSize).to.equal("queen")
  })
  it('should hold the number of beds', () => {
   // booking1.findRoomInfo(sampleRoomData)
    expect(booking1.numBeds).to.equal(1)
  })
  it('should hold the cost per night', () => {
    //booking1.findRoomInfo(sampleRoomData)
    expect(booking1.costPerNight).to.equal(343.95)
  })
})