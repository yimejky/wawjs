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
        const fnValue = fn(ch)

        if (fnValue instanceof Promise) {
          fnValue.then((data) => {
            data && this.push(ch)
            cb()
          })
        } else {
          fnValue && this.push(ch)
          cb()
        }
      }
    })
  },
  filterDuplicates: function (fn) {
    const set = new Set()

    return new Transform({
      objectMode: true,
      transform (ch, e, cb) {
        const value = fn(ch)

        if (!set.has(value)) {
          set.add(value)
          this.push(ch)
        }
        cb()
      }
    })
  }
}
