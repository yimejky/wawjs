/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function() {

  var async = {};
  async.noConflict = function() {
    root.async = previous_async;
    return async;
  };

  function only_once(fn) {}

  async.each = function(arr, iterator, callback) {
    //...
  };

  async.forEach = async.each;

  var _eachLimit = function(limit) {
    //...
  };

  // Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = async;
  }
  // AMD / RequireJS
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return async;
    });
  }
  // included directly via <script> tag
  else {
    root.async = async;
  }

}());