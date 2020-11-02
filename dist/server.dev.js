"use strict";

var http = require('http');

var server = http.createServer(function (request, response) {
  var book = {
    author: 'Charles Dickens',
    title: 'Great Expectations'
  };
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(book));
  response.end();
});
server.listen(8000);