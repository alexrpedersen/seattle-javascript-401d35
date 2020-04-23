'use strict';

const schema = require('./food-schema.js');
const model = require('./model');

class Food extends model { };

module.exports = new Food(schema);