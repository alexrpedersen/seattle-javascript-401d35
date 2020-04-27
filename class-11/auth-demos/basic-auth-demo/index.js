'use strict';

const express = require('express');
const basicAuth = require('./basic-auth-middleware.js');
const users = require('./users.js');

const app = express();

// will parse the req body on post and put request
app.use(express.json());

app.post('/signup', (req, res) => {
  users.save(req.body)
    .then(user => {
      let token = users.generateToken(user);
      res.status(200).send(token);
    })
    .catch( err => res.status(403).send('error creating user'));
});

app.post('/signin', basicAuth, (req, res) => {
  // req.token only exists because of our basic auth middleware
  res.status(200).send(req.token);
});

app.get('/users', basicAuth, (req, res) => {
  res.status(200).send(users.list());
});

app.listen(3000, () => { console.log('listening on 3000!')});