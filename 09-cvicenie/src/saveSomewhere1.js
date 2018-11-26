const async = require('async')
const fs = require('fs')
module.exports = saveSomewhere

function saveSomewhere (paths, data, callback) {
  const tasks = paths.map((path) =>
    (callback) => fs.writeFile(path, data, (err) => callback(err, path)))
  async.tryEach(tasks, callback)
}
