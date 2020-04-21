'use strict';

const express = require('express');
const app = express();
const logger = require('./logger.js');

// global middleware
app.use(express.json());
app.use(logger);

// basic GET request -> (GET) method -> route (path)
app.get('/fruit', (req, res) => {
  // example request URL -> http://localhost:3000/fruit?type=apple&name=cosmic
  let output = {
    type: req.query.type,
    name: req.query.name
  }

  res.status(200).json(output);
});

app.get('/fruit/:type/:name', (req, res) => {
  // example request URL -> http://localhost:3000/fruit/apple/cosmic
  let output = {
    type: req.params.type,
    name: req.params.name
  }
  res.status(200).json(output);
});

app.post('/fruit', (req, res) => {
  console.log('my req body - data attached to the req:', req.body);
  res.status(201).send('fruit item created');
});

app.put('/fruit', (req, res) => {
  console.log('put request body:', req.body);
  res.status(201).send('fruit item updated');
});

function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('not a number');
    } else {
      req.number = n * n;
      next();
    }
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'generic server error';
  res.json( { error: err });
  next();
}

app.get('/bad-route', (req, res) => {
  throw new Error('some random server error');
});

// research and implement a not found handler as well

app.get('/middleware', square(10), (req, res) => {
  // middleware will modify the req object so that we can use in our logic here
  console.log(req.number);
});

let db = [];

app.post('/api/v1/food', (req, res) => {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.json(db);
});

app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port | process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  }
}