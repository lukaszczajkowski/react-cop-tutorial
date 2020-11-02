'use strict';

var db = require('../config/db');

var mysql = require('mysql');

var connectionPool = {
  pool: null,
  init: function init() {
    this.pool = mysql.createPool(db);
  },
  getPool: function getPool() {
    return this.pool;
  }
};
module.exports = connectionPool;