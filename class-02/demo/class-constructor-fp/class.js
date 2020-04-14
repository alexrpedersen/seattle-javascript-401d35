'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('i am walking...');
  }
}

class Dog extends Animal {
  // super is a built in keyword that pulls in props / methods from the thing
  // it extended off of
  speak() {
    console.log('woof woof');
  }

  run() {
    super.walk();
  }
}

module.exports = Dog;