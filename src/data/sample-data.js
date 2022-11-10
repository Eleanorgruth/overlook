const sampleCustomerData = [
  {
    id: 1,
    name: "Leatha Ullrich"
  },
  {
    id: 2,
    name: "Rocio Schuster"
  },
  {
    id: 3,
    name: "Kelvin Schiller"
  },
  {
    id: 4,
    name: "Kennedi Emard"
  },
  {
    id: 5,
    name: "Rhiannon Little"
  }]
const sampleBookingData = [
  {
    id: "5fwrgu4i7k55hl6x8",
    userID: 1,
    date: "2023/01/11",
    roomNumber: 20
  },
  {
    id: "5fwrgu4i7k55hl76z",
    userID: 1,
    date: "2022/02/15",
    roomNumber: 4
  },
  {
    id: "5fwrgu4i7k55hl7bh",
    userID: 1,
    date: "2022/02/24",
    roomNumber: 6
  },
  {
    id: "5fwrgu4i7k55hl74l",
    userID: 2,
    date: "2022/01/22",
    roomNumber: 6
  },
  {
    id: "5fwrgu4i7k55hl8eb",
    userID: 2,
    date: "2021/10/23",
    roomNumber: 6
  },
  {
    id: "5fwrgu4i7k55hl72u",
    userID: 3,
    date: "2022/02/17",
    roomNumber: 4
  },
  {
    id: "5fwrgu4i7k55hl7aa",
    userID: 3,
    date: "2023/02/14",
    roomNumber: 20
  },
  {
    id: "5fwrgu4i7k55hl7qz",
    userID: 3,
    date: "2023/01/26",
    roomNumber: 16
  },
  {
    id: "5fwrgu4i7k55hl7a6",
    userID: 3,
    date: "2022/02/02",
    roomNumber: 16
  },
]
const sampleRoomData = [
  {
    number: 4,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 429.44
  },
  {
    number: 6,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 397.02
  },
  {
    number: 16,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 325.6
  },
  {
    number: 20,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 343.95
  }
]
export { sampleCustomerData, sampleBookingData, sampleRoomData }