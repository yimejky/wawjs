// implement test for expected behavior of generator streams
const fromGenerator = require('../src/fromGenerator')
const object = require('../src/object')
const stringify = require('../src/stringify')

describe('Object', function () {
  function * generator (limit) {
    for (let i = 1; i <= limit; i++) yield i
  }

  it('map', function () {
    const rs = fromGenerator(generator(5))

    rs.pipe(object.map(num => num))
      .pipe(stringify())
      .pipe(process.stdout)
  })

  it('filter', function () {
    const rs = fromGenerator(generator(5))

    rs.pipe(object.filter(num => num % 3 !== 0))
      .pipe(stringify())
      .pipe(process.stdout)
  })
})
