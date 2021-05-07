//Delete Files
var fs = require( 'fs');
fs.unlink('mynewfile1.txt',function(err){
    if(err)
    { 
 
 throw err;
     }

   else
    console.log(' mynewfile1 is  deleted !');
});