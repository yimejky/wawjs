// generic composition
// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

function pipe(...fns) {
    return (x) => {
        let v = x;
        for (const f of fns) {
            v = f(v);
        }

        return v;
    }
}

module.exports = pipe;


// ------------- TESTS -------------------------------
process.env.SELF_TEST && (() => {
    console.error(`[self test]:${__filename}:...`);

    const assert = require("assert");

    const a = (v) => `a(${v})`;
    const b = (v) => `b(${v})`;
    const c = (v) => `c(${v})`;

    assert.equal(pipe(a, b, c)("x"), "c(b(a(x)))");

    assert.equal(pipe(a)("x"), "a(x)");

    console.error(`[self test]:${__filename}:OK`)
})();

