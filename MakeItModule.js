
var newModule = require('./mymodule');
var arg = process.argv[2];
var arg2 = process.argv[3];


newModule(arg, arg2,  function (err, list) {
  if (err)
    return console.error('That didn\'t work', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
