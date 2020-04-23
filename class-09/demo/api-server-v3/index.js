'use strict';

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const server = require('./lib/server.js');

dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect(process.env.MONGODB_URI, options);

server.start()
