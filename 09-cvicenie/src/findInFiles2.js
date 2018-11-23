const async = require('async')
const path = require('path')
const findInFile = require('./findInFile')
module.exports = findInFiles

function findInFiles (dirs, file, findString, cb) {
  const tasks = dirs
    .map(dir => path.join(dir, file))
    .map(filePath => callback => findInFile(filePath, findString, callback))

  async.tryEach(tasks, cb)
}
