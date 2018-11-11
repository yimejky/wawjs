// implement test for expected behavior of generator streams
const assert = require('assert')
const fromGenerator = require('../src/fromGenerator')
const object = require('../src/object')

describe('Object', function () {
  function * generator (limit) {
    for (let i = 1; i <= limit; i++) yield i
  }

  function * generatorOne (limit) {
    for (let i = 1; i <= limit; i++) yield 1
  }

  function generatorToArray (generator) {
    const array = []

    while (1) {
      const item = generator.next()
      if (item.done) return array
      array.push(item.value)
    }
  }

  function multi (num) {
    return num * 2
  }

  function modulo (num) {
    return num % 2 !== 0
  }

  async function multiPromise (num) {
    return new Promise(resolve => setTimeout(() => resolve(multi(num)), 100))
  }

  async function moduloPromise (num) {
    return new Promise(resolve => setTimeout(() => resolve(modulo(num)), 100))
  }

  it('basic map', function () {
    const rs = fromGenerator(generator(5))
    const stream = rs.pipe(object.map(multi))

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      const validArray = generatorToArray(generator(5)).map(multi)
      assert.deepStrictEqual(array, validArray)
    })
  })

  it('basic filter', function () {
    const rs = fromGenerator(generator(5))
    const stream = rs.pipe(object.filter(modulo))

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      const validArray = generatorToArray(generator(5)).filter(modulo)
      assert.deepStrictEqual(array, validArray)
    })
  })

  it('promise map', function (done) {
    const rs = fromGenerator(generator(5))
    const stream = rs.pipe(object.map(multiPromise))

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      const validArray = generatorToArray(generator(5)).map(multi)
      assert.deepStrictEqual(array, validArray)
      done()
    })
  })

  it('promise filter', function (done) {
    const rs = fromGenerator(generator(5))
    const stream = rs.pipe(object.filter(moduloPromise))

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      const validArray = generatorToArray(generator(5)).filter(modulo)
      assert.deepStrictEqual(array, validArray)
      done()
    })
  })

  it('filter duplicates', function (done) {
    const rs = fromGenerator(generatorOne(5))
    const stream = rs.pipe(object.filterDuplicates(modulo))

    const array = []
    stream.on('data', (data) => {
      array.push(data)
    })
    stream.on('end', () => {
      const validSet = new Set(generatorToArray(generatorOne(5)))
      const validArray = [...validSet]

      assert.deepStrictEqual(array, validArray)
      done()
    })
  })
})
