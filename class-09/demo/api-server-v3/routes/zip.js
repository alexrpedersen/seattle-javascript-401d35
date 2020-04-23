'use strict';

const express = require('express');
const router = express.Router();

function getZip(req, res, next) {
  req.body.zip = Math.floor(Math.random() * 10000).toString().padStart(5, 0);
  next();
}

router.param('city', getZip);

// this route will not have a req.body.zip because there is no :request-param
router.get('/places/seattle', (req, res, next) => {
  res.json({ zip: req.body.zip, hasZip: false });
});

// this route will have a req.body.zip because there is a "city" :request-param
router.get('/places/:city', (req, res, next) => {
  res.json({ zip: req.body.zip, hasZip: true })
});

// this route will not have a req.body.zip because the request-param is "random", not "city"
router.get('/places/town/:random', (req, res, next) => {
  res.json({ zip: req.body.zip, hasZip: false })
});

module.exports = router;