function flat(o) {
    let i = o;
    while (Object.getPrototypeOf(i)) {
        i = Object.getPrototypeOf(i);
        Object.assign(o, i);
    }

    return o
}

module.exports = flat;
