// tested library
//const Copier = require("../src/Copier.js");
const Copier = require("../src/Copier2.js");

const assert = require("assert");
const fs = require('fs');

describe("Copying existing files - API styles test", function () {

    it("Copier supports event api", function (done) {

        let from = __filename; // use self as source
        let to = __filename + ".bak";

        var c = new Copier(from, to);
        c.on("finish", () => done());
        c.on("error", (err) => done(err));
        c.copy();

    });

    it.skip("TODO: Copier supports also callback api ", function (done) {

        // TODO: adjust Copier.copy function to accept callback
        // and make this test green
        // previous test must also be green

        let from = __filename; // use self as source
        let to = __filename + ".bak";

        var c = new Copier(from, to);

        c.copy(function (err, data) {
            done(err, data);
        });

    });

    it.skip("TODO: events shell not be fired in callback api ", function (done) {

        // DO this only after previous is implemented
        let from = __filename; // use self as source
        let to = __filename + ".bak";

        var c = new Copier(from, to);
        c.on("error", () => called = true);
        c.on("data", () => called = true);
        c.copy(function (err, data) {
            if (called) done(new Error("callbacks shell not be called"));
            else done(err, data);
        });

    });

    it("copy called multiple times incorrectly appends", function (done) {
        let from = __filename;
        let to = __filename + ".bak";

        const c = new Copier(from, to);
        let count = 0;
        c.on('finish', () => {
            const fromBuf = fs.readFileSync(from);
            const toBuf = fs.readFileSync(to);
            assert(fromBuf.equals(toBuf));

            if (++count === 2)
                done();
        });

        c.copy();
        c.copy();
    });

});