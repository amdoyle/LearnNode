// modules required
var fs = require('fs');
var http = require('http');

// global variables
var port = process.argv[2];
var file = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (request, response) {

  response.writeHead(200, {'content-type': 'text/plain'});
  file.pipe(response);
});


// active code

server.listen(Number(port));
