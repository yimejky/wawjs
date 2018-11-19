module.exports = writeTempFile

const fs = require('fs')
const os = require('os')
const path = require('path')

function writeTempFile (fileName, ...args /* data, options, callback*/) {
  let cb = args.pop()
  let options = args.pop()
  let data = args.pop()

  let tempDir = path.join(os.tmpdir(), `${process.pid}-`)
  try {
    fs.mkdtemp(tempDir, (err, folder) => {
      if (err)
        return cb(err, folder)

      const filePath = path.join(folder, fileName)
      try {
        fs.writeFile(filePath, data, options, (err) => {
          cb(err, filePath)
        })
      } catch (err) {
        cb(err)
      }
    })
  } catch (err) {
    cb(err)
  }
}

console.log(writeTempFile.length)
