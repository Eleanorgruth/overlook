import chai from 'chai';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';
import { sampleBookingData, sampleRoomData } from '../src/data/sample-data';
const expect = chai.expect;


describe('Booking', () => {
  sampleBookingData
  sampleRoomData
  let booking1, booking2, room4, room2

  beforeEach(() => {
    booking1 = new Booking(sampleBookingData[0], sampleRoomData)
    booking2 = new Booking(sampleBookingData[3], sampleRoomData)
    room2 = new Room(sampleRoomData[1])
    room4 = new Room(sampleRoomData[3])
    sampleBookingData
    sampleRoomData
  })
  it('should be a function', () => {
    expect(Booking).to.be.a('function')
  })
  it('should hold the booking id', () => {
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6x8')
    expect(booking2.id).to.equal('5fwrgu4i7k55hl74l')
  })
  it('should hold the user id', () => {
    expect(booking1.userID).to.equal(1)
    expect(booking2.userID).to.equal(2)
  })
  it('should hold the date', () => {
    expect(booking1.date).to.equal("2023/01/11")
    expect(booking2.date).to.equal("2022/01/22")
  })
  it('should hold the reformatted date', () => {
    expect(booking1.reformattedDate).to.equal(1673420400000)
    expect(booking2.reformattedDate).to.equal(1642834800000)
  })
  it('should hold the booking status', () => {
    expect(booking1.bookingStatus).to.equal("Upcoming Booking")
    expect(booking2.bookingStatus).to.equal("Past Booking")
  })
  it('should hold the room number', () => {
    expect(booking1.roomNumber).to.equal(20)
    expect(booking2.roomNumber).to.equal(6)
  })
  it('should hold the room type', () => {
    expect(booking1.roomType).to.equal("residential suite")
    expect(booking2.roomType).to.equal("junior suite")
  })
  it('should hold the bidet status', () => {
    expect(booking1.bidet).to.equal(false)
    expect(booking2.bidet).to.equal(true)
  })
  it('should hold the bidet message', () => {
    expect(booking1.bidetMessage).to.equal("bidet not included")
    expect(booking2.bidetMessage).to.equal("bidet included")
  })
  it('should hold the bed size', () => {
    expect(booking1.bedSize).to.equal("queen")
    expect(booking2.bedSize).to.equal("queen")
  })
  it('should hold the number of beds', () => {
    expect(booking1.numBeds).to.equal(1)
    expect(booking2.numBeds).to.equal(1)
  })
  it('should hold the cost per night', () => {
    expect(booking1.costPerNight).to.equal(343.95)
    expect(booking2.costPerNight).to.equal(397.02)
  })
  it('should find the room booked', () => {
    const roomTest1 = booking1.findRoom(sampleRoomData)
    expect(roomTest1).to.deep.equal(room4)
    const roomTest2 = booking2.findRoom(sampleRoomData)
    expect(roomTest2).to.deep.equal(room2)
  })
})