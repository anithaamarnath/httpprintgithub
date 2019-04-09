var getHTML = require('./http-function');
var http = require('http');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(data) {
    console.log(data);
}
getHTML(requestOptions,printHTML);