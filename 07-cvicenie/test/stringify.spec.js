// implement test for expected behavior of generator streams
const assert = require('assert')
const fromGenerator = require('../src/fromGenerator')
const stringify = require('../src/stringify')

describe('Stringify', function () {
  function * generator (limit) {
    const obj = {}

    for (let i = 1; i <= limit; i++) {
      obj[`VALUE_${i}`] = i * 2
      obj[`VALUE_${i}_str`] = `${i * 2}`

      yield obj
    }
  }

  function generatorToArray (generator) {
    const array = []

    while (1) {
      const item = generator.next()
      if (item.done) return array
      array.push(item.value)
    }
  }

  it('basic stringify test', function () {
    const rs = fromGenerator(generator(5))
    const validArray = generatorToArray(generator(5)).map(JSON.stringify)

    const stream = rs.pipe(stringify())

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      assert.deepStrictEqual(array, validArray)
    })
  })
})
