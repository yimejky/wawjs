const async = require('async')
const path = require('path')
const findInFile = require('./findInFile')
module.exports = findInFiles

function findInFiles (dirs, file, findString, cb) {
  const files = dirs.map(dir => path.join(dir, file))

  async.filter(
    files,
    (filePath, callback) =>
      findInFile(filePath, findString, (err) => callback(null, !err)),
    cb
  )
}
