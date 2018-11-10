const fs = require('fs')
const { createGzip } = require('zlib')
const http = require('http')

const server = http.createServer()

server.listen(3000, 'localhost')
  .on('request', (req, res) => {
    const gzip = req.pipe(createGzip())

    const ws = fs.createWriteStream(`tmp/lastfile.gzip`)
    gzip.pipe(ws)
    gzip.pipe(res)
  })

// request -> gzip -> ws
//                 -> response
