/*
returns new object Transport stream
	- accepting objects
	- and returning strings representing JSON.stringify(obj)

use cases:

fromGenerator(sequence).pipe(stringify).pipe(process.stdout);
*/
const { Transform } = require('stream')

module.exports = function () {
  return new Transform({
    objectMode: true,
    transform (ch, e, cb) {
      try {
        const string = JSON.stringify(ch)
        this.push(string)
      } catch (error) {
        this.emit('error', error)
      }
      cb()
    }
  })
}
