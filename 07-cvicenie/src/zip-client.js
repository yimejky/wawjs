const fs = require('fs')
const path = require('path')
const http = require('http')

const filepath = path.resolve(process.argv[2])
const filename = path.basename(filepath)

const rs = fs.createReadStream(filepath)
const ws = fs.createWriteStream(`tmp/${filename}.gzip`)

const url = 'http://localhost:3000'
const request = http.request(url, {
  method: 'POST'
}).on('response', (res) => {
  res.pipe(ws)
})

rs.pipe(request)

// rs -> request -> response -> ws
