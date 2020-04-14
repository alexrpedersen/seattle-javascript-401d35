'use strict';

// constructor
const Animal = function(name) {
  this.name = name;
}

Animal.prototype.walk = () => {
  console.log('i am walking...');
}

const Dog = function(name) {
  // super() -> we will see this in the class syntax
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = () => {
  console.log('woof woof');
}

module.exports = Dog;