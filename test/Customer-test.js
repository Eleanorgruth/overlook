import chai from 'chai';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';
import { sampleBookingData, sampleCustomerData, sampleRoomData } from '../src/data/sample-data';
const expect = chai.expect;


describe('Customer', () => {
  let customer1, booking1, booking2, booking3

  beforeEach(() => {
    customer1 = new Customer(sampleCustomerData[0], sampleBookingData, sampleRoomData)
    booking1 = new Booking(sampleBookingData[0], sampleRoomData)
    booking2 = new Booking(sampleBookingData[1], sampleRoomData)
    booking3 = new Booking(sampleBookingData[2], sampleRoomData)
  })
  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  })
  it('should hold a customer id', () => {
    expect(customer1.id).to.equal(1)
  })
  it('should hold a customer name', () => {
    expect(customer1.name).to.equal('Leatha Ullrich')
  })
  // it('should hold a list of upcoming bookings, defaulting to an empty array', () => {
  //   expect(customer1.upcomingBookings).to.deep.equal([])
  // })
  // it('should hold a list of past bookings, defaulting to an empty array', () => {
  //   expect(customer1.pastBookings).to.deep.equal([])
  // })
  it('should be able to get the list of all booking the customer made', () => {
    customer1.getBookingsList(sampleBookingData, sampleRoomData)
    expect(customer1.bookings).to.deep.equal([booking1, booking3, booking2])
  })
  it('should be able to calculate the cost of all booking the customer made', () => {
    expect(customer1.totalCost).to.deep.equal(1170.41)
  })
})