'use strict';

const mongoose = require('mongoose');

// blueprint for our data and the type of data for each property
const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'MEAT', 'BREAD']}
});

module.exports = mongoose.model('food', food);