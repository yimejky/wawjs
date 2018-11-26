module.exports = writeTempFile

const fs = require('fs')
const os = require('os')
const path = require('path')
const async = require('async')

function writeTempFile (fileName, ...args /* data, options, callback*/) {
  const callback = args.pop()

  async.waterfall([
    (callback) => {
      const tempDir = path.join(os.tmpdir(), `${process.pid}-`)
      fs.mkdtemp(tempDir, callback)
    },
    (folder, callback) => {
      try {
        const filePath = path.join(folder, fileName)
        fs.writeFile(filePath, ...args, (err) => callback(err, filePath))
      } catch (err) {
        callback(err)
      }
    }
  ], callback)
}
