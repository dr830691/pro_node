var http = require( 'http');
var url= require('url');
var fs = require('fs');
var i=0;
http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var filename= "."+ q.pathname;
    fs.readFile(filename, function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return 
            res.end("404 NOT FOUND");
        }
        res.writeHead(200 ,{'Content-Type':'text/html'});
        res.write(data);i++;
        return res.end();
    });
    console.log( i +'successfully Run!');
   
}).listen(8080);
