// implement test for expected behavior of generator streams
const { PassThrough } = require('stream')
const assert = require('assert')
const bom = require('../src/bom')

describe('BOM', function () {
  it('add', function (done) {
    const rs = PassThrough()
    const ws = rs.pipe(bom.add())

    const buffer = []
    const array = ['test1', 'test2']

    ws.on('data', (chunk) => {
      buffer.push(chunk)
    })
    ws.on('finish', () => {
      assert(buffer.length - 1 === array.length, 'length')
      assert(buffer[0] === '\ufeff', 'BOM')

      done()
    })

    array.forEach((data) => {
      rs.emit('data', data)
    })
    rs.emit('end')
  })

  it('remove', function (done) {
    const rs = PassThrough()
    const ws = rs.pipe(bom.remove())

    const buffer = []
    const array = ['\ufefftest1', 'test2']

    ws.on('data', (chunk) => {
      buffer.push(chunk)
    })
    ws.on('finish', () => {
      assert(buffer.length === array.length, 'length')
      assert(!~buffer[0].indexOf('\ufeff'), 'BOM')

      done()
    })

    array.forEach((data) => {
      rs.emit('data', data)
    })
    rs.emit('end')
  })

  it('add and remove', function (done) {
    const rs = PassThrough()
    const ws = rs
      .pipe(bom.add())
      .pipe(bom.remove())

    const buffer = []
    const array = ['test1', 'test2']

    ws.on('data', (chunk) => {
      buffer.push(chunk)
    })

    ws.on('finish', () => {
      assert.deepStrictEqual(buffer, array)

      done()
    })

    array.forEach((data) => {
      rs.emit('data', data)
    })
    rs.emit('end')
  })

})
