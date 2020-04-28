'use strict';

const express = require('express');
const basicAuth = require('./basic-auth-middleware.js');
const oauth = require('./oauth-middleware.js');
const users = require('./users.js');

const app = express();

// will parse the req body on post and put request
app.use(express.json());

// this is used to serve static content
app.use(express.static('./public'));

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

// this is our "redirect_uri"
app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

app.listen(3000, () => { console.log('listening on 3000!')});