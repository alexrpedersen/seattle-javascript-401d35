'use strict';

class Stack {
  constructor() {
    // every stack should hold the items in the stack -> this.storage
    // every stack should give us access to the "top" or "last" item pushed onto the stack
    this.top = null;
    this.storage = new Array(); // this will create an instance of a new array -> you can also just use []
  }
  
  push(item) {
    this.storage.push(item);
    this.top = item;
  }

  pop() {
    // gives me what the top item is and actually removes
    let item = this.storage.pop(); // storage is an array -> we are removing the last item in the array
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    return item;
  }

  peek() {
    // gives me what this top item is but keeps the stack intact
    return this.top;
  }
}

module.exports = Stack;