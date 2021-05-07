var http =require ('http');
http.createServer( function(req,res){
    res.write('HEllo Universe!');
    res.end();

}).listen(8080);