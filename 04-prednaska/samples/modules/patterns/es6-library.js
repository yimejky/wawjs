/*
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
import apply from './apply'
import applyEach from './applyEach'
import applyEachSeries from './applyEachSeries'
import asyncify from './asyncify'
import auto from './auto'
import autoInject from './autoInject'
import cargo from './cargo'
//...
import whilst from './whilst'

export default {
    apply,
    applyEach,
    applyEachSeries,
    asyncify,
    auto,
    autoInject,
    cargo,
    whilst,

    // aliases
    all: every,
    //...
    during: whilst,
    doDuring: doWhilst
};

export {
    apply as apply,
    applyEach as applyEach,
    applyEachSeries as applyEachSeries,
    asyncify as asyncify,
    auto as auto,
    autoInject as autoInject,
    cargo as cargo,
    //...

    // Aliases
    every as all,
    // ...
    whilst as during,
    doWhilst as doDuring
};
