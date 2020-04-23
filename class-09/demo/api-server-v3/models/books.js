'use strict';

const model = require('./model.js');
const bookSchema = require('./books-schema.js');

class Books extends model { };

module.exports = new Books(bookSchema);