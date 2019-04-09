
var https = require('https');
module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');
  var chunk = "";
  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {

     chunk += data;
  });


// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response



response.on('end', function() {
    console.log('Response stream complete.' + chunk);
  });

});

}
