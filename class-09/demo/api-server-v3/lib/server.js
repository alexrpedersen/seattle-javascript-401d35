'use strict';

const express = require('express');
const errorHandler = require('../middleware/500.js');
const notFound = require('../middleware/404.js');
const zipRouter = require('../routes/zip.js');
const apiRouter = require('../routes/v1.js');

const app = express();
app.use(express.json());

app.use(zipRouter);
app.use(apiRouter);

// route above this line that has been registered - send back a 404
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3333;
    app.listen(PORT, () => console.log(`server up: ${PORT}`));
  }
}