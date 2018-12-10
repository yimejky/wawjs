const fs = require('fs').promises
const os = require('os')
const path = require('path')

// ASYNC
async function writeTempFile1 (fileName, ...args) {
  const callback = args.pop()

  try {
    let tempDir = path.join(os.tmpdir(), `${process.pid}-`)
    const folder = await fs.mkdtemp(tempDir)

    const filePath = path.join(folder, fileName)
    const path = await fs.writeFile(filePath, ...args)
    callback(null, path)
  } catch (err) {
    callback(err)
  }
}

// PROMISE
function writeTempFile2 (fileName, ...args) {
  const callback = args.pop()

  let tempDir = path.join(os.tmpdir(), `${process.pid}-`)
  fs.mkdtemp(tempDir)
    .then(folder => {
      const filePath = path.join(folder, fileName)
      return fs.writeFile(filePath, ...args)
    })
    .then(filePath => callback(null, filePath))
    .catch(err => callback(err))

}

// CALLBACK
function writeTempFile3 (fileName, ...args) {
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

module.exports = { writeTempFile1, writeTempFile2, writeTempFile3 }
