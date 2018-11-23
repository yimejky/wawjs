const fs = require('fs')
const readline = require('readline')
module.exports = findInFile

function findInFile (file, findString, callback) {
  const input = fs.createReadStream(file)
  input.on('error', (err) => callback(err))

  const rs = readline.createInterface({ input })
  let found = false
  rs.on('line', line => {
    if (line.indexOf(findString) > -1) {
      found = true
      rs.close()
      callback(null, file)
    }
  })
  rs.on('close', () =>
    !found && callback(new Error('file doesnt cotain string')))
}
