var http = require('http');
var bl = require('bl');

var url = process.argv
var urls = [];
var count = 0;

function results () {
  for (var i = 0; i < 3; i++)
    console.log(urls[i])
}

function request (index) {
  http.get(url[2 + index], function(response) {
    response.pipe(bl(function (err, data) {
      if (err)
          return console.error(data);

    urls[index] = data.toString();
    count++

    if (count == 3)
      results();
    }));
  });
}

for (var i = 0; i < 3; i++)
  request(i);
