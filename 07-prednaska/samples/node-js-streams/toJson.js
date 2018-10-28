const { Transform } = require('stream');
const toJson = new Transform({
    write(line, enc, cb) {
        let [_, size, name] = line.match(/^(.*)\s(.*)$/);
        let json = JSON.stringify({ size, name });
        this.push(json + "\n");
        cb();
    },
    decodeStrings: false
});
module.exports = toJson;