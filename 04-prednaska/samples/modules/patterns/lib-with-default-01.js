/*!
 *  Copyright 2010 LearnBoost <dev@learnboost.com>
 * from: aws-sign2
 */

// require, require

// var ....

function authorization(options) {
  return 'AWS ' + options.key + ':' + sign(options)
}

module.exports = authorization
module.exports.authorization = authorization

function hmacSha1(options) {
  //...
}
module.exports.hmacSha1 = hmacSha1

function sign(options) {
  //...
}
module.exports.sign = sign

//...