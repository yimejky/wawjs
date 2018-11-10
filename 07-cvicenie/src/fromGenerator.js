/*

implement function returning Readable Stream
of objects from supplied generator

Sample: usage
function* generator(limit) {
	for (let i = 1; i <= limit; i++) yield i;
}
let sequence = generator(10000);

fromGenerator(sequence).on("data", function(data){
	console.log()
});

fromGenerator(sequence).pipe(stringify).pipe(process.stdout);
*/

const { Readable } = require('stream')

class FromGenerator extends Readable {
  constructor (options, generator) {
    super(options)
    this.resource = generator
  }

  _read (size) {
    let b, data

    do {
      data = this.resource.next()

      if (!data.done) {
        b = this.push(data.value)
      } else {
        this.push(null)
        return
      }
    } while (b)
  }
}

module.exports = function (generator) {
  return new FromGenerator({ objectMode: true }, generator)
}
