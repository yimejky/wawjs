module.exports = writeTempFile

const fs = require('fs')
const os = require('os')
const path = require('path')
const async = require('async')

function writeTempFile (fileName, ...args /* data, options, callback*/) {
  let cb = args.pop()
  let options = args.pop()
  let data = args.pop()

  async.waterfall([
    function (callback) {
      let tempDir = path.join(os.tmpdir(), `${process.pid}-`)
      fs.mkdtemp(tempDir, callback)
    },
    function (folder, callback) {
      try {
        const filePath = path.join(folder, fileName)
        fs.writeFile(filePath, data, options, (err) => callback(err, filePath))
      } catch (err) {
        callback(err)
      }
    }
  ], cb)
}
