var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/Employee.js');

Employee.collection.remove({});

Employee.insertMany([
  { 
    name: "David Beckham",
    title: "Attacking MidFielder",
    position: "RM",
    date_joined: "12/12/1990",
    imgUrl: "./assets/beckham.jpg"

  },
  { 
    name: "David De Gea",
    title: "Goal Keeper",
    position: "GK",
    date_joined: "12/12/2000",
    imgUrl: "./assets/deGea.jpg"

  },
  { 
    name: "Ronaldinho Gaucho",
    title: "Attacking MidFielder",
    position: "CM",
    date_joined: "12/12/2001",
    imgUrl: "./assets/ronaldinho.jpg"

  },
  { 
    name: "CR7 Ronaldo",
    title: "Striker",
    position: "CF",
    date_joined: "12/12/2003",
    imgUrl: "./assets/ronaldo.jpg"

  },
  { name: "Lionel Messi",
    title: "Attacking Forward",
    position: "LF",
    date_joined: "12/12/2006",
    imgUrl: "./assets/messi.jpg"
  }

]);
router.get('/', function(req, res, next) {

  Employee.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/:id', function(req, res, next) {
  Employee.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function(req, res, next) {
  Employee.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Employee.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
