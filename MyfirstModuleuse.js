var http = require( 'http' );
var date =require( './myfirstModule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The current Date and Time is:  " + date.myDateandTime());
    res.end();
}).listen(8080);