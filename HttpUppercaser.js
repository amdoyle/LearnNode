// modules required
var http = require('http');
var map = require("through2-map");

// global variables
var port = process.argv[2];

var upcase = map(function (code){
  return code.toString().toUpperCase();
});

// creating a new server
var server = http.createServer(function (inStream, outStream) {
  
//this currently has no error callback
  if(inStream.method == 'POST') {
    inStream.pipe(upcase).pipe(outStream);
  }
});

// active code
server.listen(Number(port));
