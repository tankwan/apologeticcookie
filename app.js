var express = require('express');
var app = express();
var db = require('./server/db/db');
var Photo = require('./server/db/models/Photo');

app.get('/', function(request, response) {
  response.send('This marks the beginning of Phodome');
});

app.listen(process.env.PORT || 9999, function() {
  console.log(`listening on port ${process.env.PORT || 9999}`);
});

// force: true will drop the table if it already exists
// Photo.sync({force: true}).then(function () {
//   return Photo.create({
//     imageId: 'shaka.jpg',
//     comment: 'Whatddup'
//   });
// });

Photo.findAll().then(function(photos) {
  console.log(photos);
});
