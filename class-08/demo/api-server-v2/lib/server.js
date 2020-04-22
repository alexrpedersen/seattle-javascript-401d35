'use strict';
// 3rd party npm package
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// internal modules
const foodRoutes = require('../routes/food.js');

// application constant
const app = express();

app.use(express.json()); // used for parsing req bodies
app.use(morgan('dev')); // used for logging incoming req
app.use(cors()); // opens up the API for public access

app.use('/api/v1/', foodRoutes);

// exportable and testable server
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3333;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  }
}