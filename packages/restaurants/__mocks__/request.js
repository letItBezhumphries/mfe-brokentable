const fs = require('fs')
require('./eattherich.json')

const request = (url) => new Promise((resolve, reject) => {
  const lastSlash = url.lastIndexOf('/')
  const restID = url.substring(lastSlash + 1)
  fs.readFile(`./${userID}.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
})

export default request
