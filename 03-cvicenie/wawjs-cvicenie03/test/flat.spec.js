const assert = require('assert');

const flat = require('../src/flat');

describe('POC flat', () => {
    it('scenar 1', (done) => {
        let x = {
            px: 10,
        };

        let y = Object.create(x);
        y.py = 20;

        let z = Object.create(y);
        z.pz = 30;

        const real = flat(z);
        assert(real.hasOwnProperty('px'));
        assert(real.hasOwnProperty('py'));
        assert(real.hasOwnProperty('pz'));
        assert(z === real);

        done();
    })
});