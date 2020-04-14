'use strict';

const dogClass = require('./class.js');
const dogConstructor = require('./constructor.js');

// using the constructor syntax
const rusty = new dogConstructor('rusty');
console.log('rusty:', rusty);
rusty.walk();
rusty.speak();
// end constructor syntax


// using the class syntax
const susie = new dogClass('susie');
console.log('susie:', susie);

susie.walk();
susie.speak();
susie.run();

