'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, required: true, uppercase: true, enum: ['FRUIT', 'VEG', 'MEAT']}
});

// mongoose.model('collection name', schema from above);
module.exports = mongoose.model('food', food);