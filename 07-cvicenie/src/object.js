const { Transform } = require('stream')

module.exports = {
  map: function (fn) {
    return new Transform({
      objectMode: true,
      transform (ch, en, cb) {
        const value = fn(ch)

        if (value instanceof Promise) {
          value.then((data) => {
            this.push(data)
            cb()
          })
        } else {
          this.push(value)
          cb()
        }
      }
    })
  },
  filter: function (fn) {
    return new Transform({
      objectMode: true,
      transform (ch, e, cb) {
        const value = fn(ch)

        if (value instanceof Promise) {
          value.then((data) => {
            data && this.push(data)
            cb()
          })
        } else {
          value && this.push(ch)
          cb()
        }
      }
    })
  }
}
