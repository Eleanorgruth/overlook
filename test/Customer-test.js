import chai from 'chai'
const expect = chai.expect
import Booking from '../src/classes/Booking'
import Customer from '../src/classes/Customer'
import {
  sampleBookingData,
  sampleCustomerData,
  sampleRoomData
} from '../src/data/sample-data'

describe('Customer', () => {
  let customer1, customer2, booking1, booking2, booking3, booking4, booking5

  beforeEach(() => {
    customer1 = new Customer(sampleCustomerData[0], 
      sampleBookingData, sampleRoomData)
    customer2 = new Customer(sampleCustomerData[1], 
      sampleBookingData, sampleRoomData)
    booking1 = new Booking(sampleBookingData[0], sampleRoomData)
    booking2 = new Booking(sampleBookingData[1], sampleRoomData)
    booking3 = new Booking(sampleBookingData[2], sampleRoomData)
    booking4 = new Booking(sampleBookingData[3], sampleRoomData)
    booking5 = new Booking(sampleBookingData[4], sampleRoomData)
  })
  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  })
  it('should hold a customer id', () => {
    expect(customer1.id).to.equal(1)
    expect(customer2.id).to.equal(2)
  })
  it('should hold a customer name', () => {
    expect(customer1.name).to.equal('Leatha Ullrich')
    expect(customer2.name).to.equal('Rocio Schuster')
  })
  it('should hold a list of all the customers bookings in chronological order', () => {
    expect(customer1.bookings).to.deep.equal([booking1, booking3, booking2])
    expect(customer2.bookings).to.deep.equal([booking5, booking4])
  })
  it('should be able to calculate the cost of all customer bookings', () => {
    expect(customer1.totalCost).to.equal(1170.41)
    expect(customer2.totalCost).to.equal(794.04)
  })
})