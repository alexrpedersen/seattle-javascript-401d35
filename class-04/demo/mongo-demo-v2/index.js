'use strict';

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/not-going-to-show-up';
const Food = require('./models/food-schema.js');

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// the following lines were just for testing that our db was connected and works with our food resource
// const apple = new Food({ name: 'apple 2', calories: 300, type: 'FRUIT'});
// apple.save();