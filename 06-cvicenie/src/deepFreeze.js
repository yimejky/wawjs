'use strict';
const traverse = require("traverse");

function clone(x) {
    if (Array.isArray(x))
        x = x.filter(() => true);
    else
        x = Object.assign({}, x);

    return x;
}

module.exports = function (o, options) {
    if (options && options.clone)
        o = Object.assign({}, o);
    Object.freeze(o);

    traverse(o).forEach(function (x) {
        if (!this.isLeaf) {
            if (options && options.clone) {
                x = this.path.reduce((acc, key) => acc[key], o);
            }

            Object.freeze(x);
        }
    });

    return o;
};


//-------------------------- tests ----------------------------------------
process.env.SELF_TEST && ((deepFreeze) => {
    console.error(`[self test]:${__filename}:...`);
    const assert = require("assert");

    let o = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            g: {
                z: 0,
            }
        },
        f: [1, 2, 3],
    };

    const fo = deepFreeze(o, {clone: true});

    assert(o !== fo, 'Object are equal');
    //assert(o.c !== fo.c, 'Inner object are equal');
    assert(Object.isFrozen(fo.c));

    assert.throws(() => fo.c.d = 999,
        /Cannot assign to read only property/
    );
    assert.throws(() => fo.f.pop(),
        /Cannot delete property/
    );

    console.error(`[self test]:${__filename}:OK`)
})(module.exports);
