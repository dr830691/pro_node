var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'this is my new Text', function(error){
    if(error) throw error;
    console.log('Mynewfile1 is Updted!');
    fs.writeFile('mynewfile1.txt','This is my text',function(error){ // reaplce the mynewfile1.txt content
        if(error) throw error;
        console.log('Mynewfile1 has been replaced !');

    })
});