const express = require('express');
const mysql = require('mysql');
const {
  password
} = require('../config/db');
const router = express.Router();

const db = require('../config/db');
const connectionPool = require('../database/connection-pool');

/* GET users listing. */
router.get('/', function (req, res, next) {

  const book = {
    'author': 'Charles Dickens',
    'title': 'Great Expectations',
    'published': '1861-01-01'
  };

  connectionPool.query('insert into books set ?', book, (err, result) => {
    if (err) throw err;
    console.log(result);
  });

  res.send('books here');
});

module.exports = router;