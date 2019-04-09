var https = require('https');
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

 return data.toUpperCase();

}

getHTML(requestOptions, printUpperCase);
