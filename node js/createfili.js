// var fs = require('fs');

// fs.appendFile('createfile.html', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});