var net = require('net');
var port = process.argv[2];

function formatDate(i) {
  return(i < 10 ? '0' : '') + i
}
var server = net.createServer(function (socket) {
  socket.end(dateTime());
});

function dateTime() {
  var date = new Date();

  return date.getFullYear() + '-' +
   formatDate(date.getMonth() + 1) + '-' +
   formatDate(date.getDate()) + ' ' +
   formatDate(date.getHours()) + ':' +
   formatDate(date.getMinutes()) + '\n'
}

server.listen(Number(port));
