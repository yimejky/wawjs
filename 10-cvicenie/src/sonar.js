module.exports = writeTempFile

const fs = require('fs').promises
const os = require('os')
const path = require('path')

async function writeTempFile (fileName, ...args /* data, options, callback*/) {
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

async function writeTempFile (fileName, ...args /* data, options, callback*/) {
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

console.log(writeTempFile.length)
