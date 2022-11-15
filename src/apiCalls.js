import { giveUserError } from "./domUpdates"

const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
    .catch(err => {
      giveUserError()
      console.log('Fetch Error: ', err)
    })
}
const fetchData = (urls) => {
  return Promise.all([
    getData(urls[0]),
    getData(urls[1]),
    getData(urls[2])
  ])
    .catch(err => {
      giveUserError()
      console.log('Fetch Error: ', err)
    })
}
const postData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
    .catch(err => {
      giveUserError()
      console.log('Fetch Error: ', err)
    })
}

export { getData, fetchData, postData }