'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const server = require('./lib/server.js');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect(MONGODB_URI, options);

server.start();