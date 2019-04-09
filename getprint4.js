
var https = require('https');
//function getAndPrintHTML (options,actions) {


// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}
function printHTML(data) {
    console.log(data);
}
function getHTML (options,callback){


https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');
  var chunk = "";
  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {

     chunk += data;
  });


// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response


function printHTML(data) {
    console.log(data);
}
response.on('end', function() {
    console.log('Response stream complete.' + chunk);
  });

});

}


getHTML(requestOptions,printHTML);













