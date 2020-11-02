"use strict";

var express = require('express');

var mysql = require('mysql');

var _require = require('../config/db'),
    password = _require.password;

var router = express.Router();

var db = require('../config/db');

var connectionPool = require('../database/connection-pool');
/* GET users listing. */


router.get('/', function (req, res, next) {
  var book = {
    'author': 'Charles Dickens',
    'title': 'Great Expectations',
    'published': '1861-01-01'
  };
  connectionPool.query('insert into books set ?', book, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  res.send('books here');
});
module.exports = router;