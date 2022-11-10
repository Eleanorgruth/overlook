const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
    .catch(err => {
      console.log('Fetch Error: ', err)
    })
}

export { getData }