const { Transform } = require('stream');

module.exports = new Transform({
    objectMode: true,
    transform(obj, encoding, callback) {
        var hex = obj.counter.toString(16);
        this.push({
            ...obj,
            hex
        });
        callback();
    }
});