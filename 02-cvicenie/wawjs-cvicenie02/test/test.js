var assert = require("./assert.js"); //extended node/assert library

describe("describe", function() {
    it("it", function() {
        assert.sameJSON({ a: 10 }, { a: 10 });
    });
});