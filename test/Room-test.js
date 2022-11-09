import chai from 'chai';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';
import { sampleBookingData, sampleCustomerData, sampleRoomData } from '../src/data/sample-data';
const expect = chai.expect;


describe('Room', () => {
  sampleBookingData
  sampleRoomData
  let room1

  beforeEach(() => {
    room1 = new Room(sampleRoomData[0])
    sampleBookingData
    sampleRoomData
  })
  it('should be a function', () => {
    expect(Room).to.be.a('function');
  })
  it('should hold a room number', () => {
    expect(room1.roomNumber).to.equal(4)
  })
  it('should hold a room type', () => {
    expect(room1.roomType).to.equal('single room')
  })
  it('should hold a bidet status', () => {
    expect(room1.bidetStatus).to.equal(false)
  })
  it('should hold a bead size', () => {
    expect(room1.bedSize).to.equal("queen")
  })
  it('should hold a the number of beds', () => {
    expect(room1.numBeds).to.equal(1)
  })
  it('should hold the cost per night', () => {
    expect(room1.costPerNight).to.equal(429.44)
  })
  // it('should hold all the bookings', () => {
  //   customer1.getBookingsList(sampleBookingData)
  //   expect(customer1.bookings).to.deep.equal([])
  // })
})