const assert = require("better-assert");
try {
    assert(10 === 20)
} catch (ex) {
    console.log(ex);
}

try {
    assert.equal(10, 20)
} catch (ex) {
    console.log(ex);
}