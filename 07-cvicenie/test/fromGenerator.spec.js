// implement test for expected behavior of generator streams
const assert = require('assert')
const fromGenerator = require('../src/fromGenerator')

describe('From generator', function () {
  function * generator (limit) {
    for (let i = 1; i <= limit; i++) yield `${i}`
  }

  it('basic fromGenerator test', function () {
    const rs = fromGenerator(generator(10))
    rs.pipe(process.stdout)
  })
})
