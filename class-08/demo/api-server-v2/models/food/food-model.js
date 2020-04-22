'use strict';

const Model = require('../model.js');
const schema = require('./food-schema.js');

class Food extends Model {
  constructor() {
    super(schema)
  }
}

module.exports = new Food();