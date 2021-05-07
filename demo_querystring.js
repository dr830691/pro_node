var http = require('http');
var url =require ('url');
http.createServer( function(req,res){
    var q=url.parse(req.url,true).query;
    var txt ="the name is :"+ q.name + "  Age is:" +q.age;
    res.end(txt);

}).listen(8080);