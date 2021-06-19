var http =require ('http');
//create a server Object
http.createServer( function(req,res){
    res.write('HEllo Universe!'); // wrtite the result on response
    res.end(); // end the response

}).listen(8080); //Server Object liston on port 8080