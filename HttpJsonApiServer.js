// required moduals
var http = require('http');
var url = require('url');

var port = process.argv[2];

// time parsing function
function parsetime(time){
  return{
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time){
  return { unixtime : time.getTime() }
}

// server
var server = http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url, true);
  var time = new Date(parsedURL.query.iso);
  var result;

  if(/^\/api\/parsetime/.test(req.url))
    result = parsetime(time);
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time);


  if (result){
    res.writeHead(200, {'Content-Type' : 'application/json'})
    res.write(JSON.stringify(result))
    res.end()
  } else{
    res.writeHead(404)
    res.end()
  }
});

server.listen(Number(port));
