// implement test for expected behavior of generator streams
const assert = require('assert')
const fromGenerator = require('../src/fromGenerator')

describe('From generator', function () {
  function * generator (limit) {
    for (let i = 1; i <= limit; i++) yield `${i}`
  }

  function generatorToArray (generator) {
    const array = []

    while (1) {
      const item = generator.next()
      if (item.done) return array
      array.push(item.value)
    }
  }

  it('basic fromGenerator test', function () {
    const stream = fromGenerator(generator(5))
    const validArray = generatorToArray(generator(5))

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      assert.deepStrictEqual(array, validArray)
    })
  })
})
