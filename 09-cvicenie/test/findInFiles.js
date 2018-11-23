const findInFiles1 = require('../src/findInFiles1.js')
const findInFiles2 = require('../src/findInFiles2.js')
const assert = require('assert')

describe('findInFiles', function () {
  const paths = [
    `${__dirname}/data/c`,
    `${__dirname}/data/a`,
    `${__dirname}/data/b`
  ]

  it('findInFiles parallel - show all', function (done) {
    findInFiles1(paths, 'sample.txt', 'sa', (err, files) => {
      if (err) return done(err)

      assert.equal(files.length, 2)
      assert(files[0].indexOf(paths[1]) > -1)
      assert(files[1].indexOf(paths[2]) > -1)
      done()
    })
  })

  it('findInFiles parallel - no file contains string', function (done) {
    findInFiles1(paths, 'sample.txt', 'sm', (err, files) => {
      if (err) return done(err)

      assert.equal(files.length, 0)
      done()
    })
  })

  it('findInFiles series - show first', function (done) {
    findInFiles2(paths, 'sample.txt', 'sa', (err, file) => {
      if (err) return done(err)
      assert.equal(file, `${__dirname}/data/a/sample.txt`)
      done()
    })
  })

  it('findInFiles series - no file contains string', function (done) {
    findInFiles2(paths, 'sample.txt', 'sm', (err) => {
      assert(err)
      done()
    })
  })

})
