
var http = require('http');// http is javaScript Module (like as JavaScript library)

http.createServer(function (req, res){  // createServer is the http Module function
  res.writeHead(200,{'Content-Type': 'text/html'});// res=(reponse) and req=(request)
  res.end('Hello Universe ! This is my first Node program.');
}).listen(8080);