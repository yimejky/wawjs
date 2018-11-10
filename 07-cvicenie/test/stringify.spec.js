// implement test for expected behavior of generator streams
const fromGenerator = require('../src/fromGenerator')
const stringify = require('../src/stringify')

describe('Stringify', function () {
  function * generator (limit) {
    for (let i = 1; i <= limit; i++) yield { testValue: i }
  }

  it('basic stringify test', function () {
    const rs = fromGenerator(generator(3))

    rs.pipe(stringify()).pipe(process.stdout)
  })
})
