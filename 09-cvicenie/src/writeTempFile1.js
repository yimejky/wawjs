module.exports = writeTempFile

const fs = require('fs')
const os = require('os')
const path = require('path')

function writeTempFile (fileName, ...args /* data, options, callback*/) {
  const callback = args.pop()

  let tempDir = path.join(os.tmpdir(), `${process.pid}-`)
  fs.mkdtemp(tempDir, (err, folder) => {
    if (err)
      return callback(err, folder)

    const filePath = path.join(folder, fileName)
    try {
      fs.writeFile(filePath, ...args, (err) => callback(err, filePath))
    } catch (err) {
      callback(err)
    }
  })
}

console.log(writeTempFile.length)
