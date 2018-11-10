const { Transform } = require('stream')

module.exports = {
  add: function () {
    let counter = 0
    return new Transform({
      objectMode: true,
      transform (ch, e, cb) {
        //console.log('DEBUG', ch, typeof ch)

        if (counter === 0) {
          this.push('\ufeff')
        }
        this.push(ch)
        cb()
        counter++
      }
    })
  },
  remove: function () {
    let counter = 0
    return new Transform({
      objectMode: true,
      transform (ch, e, cb) {

        if (counter === 0) {
          const [bom, rest] = ch.split('\ufeff')
          rest && this.push(rest)
        } else {
          this.push(ch)
        }
        cb()
        counter++
      }
    })
  }
}

