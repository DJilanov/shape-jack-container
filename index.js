var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  console.log('STARTED');
  serve(req, res, done);
});

server.listen(16200);