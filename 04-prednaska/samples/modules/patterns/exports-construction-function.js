// from: npm aws4
module.exports = function(size) {
  return new LruCache(size)
}

// impl
function LruCache(size) {
  // ...
  //this.list = new DoublyLinkedList()
}
LruCache.prototype.get = function(key) {
  //...
}
LruCache.prototype.set = function(key, val) {
 //... new DoublyLinkedNode
}
LruCache.prototype.used = function(node) {
  //...
}
LruCache.prototype.prune = function() {
  //...
}

function DoublyLinkedList() {
  //...
}

DoublyLinkedList.prototype.moveToFront = function(node) {
  //...
}
DoublyLinkedList.prototype.pop = function() {
  //...
}
function DoublyLinkedNode(key, val) {
  //...
}
