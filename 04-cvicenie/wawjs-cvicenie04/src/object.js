module.exports = {
    allOwnKeys,
    allOwnValues,
    allOwnEntries,
    getProtoChain,
    allKeys,
    forIn,
    shallowClone,
    hasInheritedProperty,
    hasOverridenProperty
};

// Object.keys supporting Symbols and non-enumerables
function allOwnKeys(o) {
    return [...Object.getOwnPropertyNames(o), ...Object.getOwnPropertySymbols(o),]
}

// Object.values supporting Symbols and non-enumerables
function allOwnValues(o) {
    return allOwnKeys(o).map(key => o[key])
}

// Object.entries supporting Symbols and non-enumerables
function allOwnEntries(o) {
    return allOwnKeys(o).map(key => [key, o[key]])
}

// [obj,...protos] array of objects in proto chain
// starting with obj itself and up-the chain
function getProtoChain(obj) {
    const array = [obj];
    while (obj = Object.getPrototypeOf(obj)) array.push(obj);

    return array
}

// Object.keys including, inherited, not-enumeble, symbols
function allKeys(obj) {
    let arr = [];
    for (let i in obj) arr.push(i);

    getProtoChain(obj).forEach(proto => allOwnKeys(proto).forEach((key) => {
        if (!arr.includes(key)) arr.push(key);
    }));

    return arr;
}

// for..in loop supporting Symbols and non-enumerable
// for own and inherited properties
function forIn(obj, callback) {
    allKeys(obj).forEach(callback)
}

// create copy of object
// with same propereties, 
// including symbols, 
// same values 
// and same property ownership 
function shallowClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}

// if the property exists only in proto chain
// not on object
function hasInheritedProperty(obj, prop) {
    return prop in obj && !Object.hasOwnProperty.call(obj, prop);
    //return delete shallowClone(obj)[prop];
}

function hasOverridenProperty(obj, prop) {

}