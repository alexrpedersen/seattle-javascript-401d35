'use strict';

const express = require('express');
const router = express.Router();

const food = require('../models/food.js');
const books = require('../models/books.js');

function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
    case "food":
      req.model = food;
      next();
      return
    case "books":
      req.model = books;
      next();
      return
    default:
      next('not a valid model');
      return
  }
}

// if any route contains a req.param of "model" -> run this getModel function
router.param('model', getModel);

// route definitions -> these contain a req.param of "model"
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne); // this has 2 req params -> model / id

function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      res.json({ results });
    })
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => {
      res.json( { result });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => {
      res.json({ result: record })
    })
    .catch(next);
}

module.exports = router;