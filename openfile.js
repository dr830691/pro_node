var fs =require ('fs');
fs.open ('mynewfile2.txt','w',function (err,file){
    if(err) throw err;
   console.log('Saved!');
   fs.writeFile('mynewfile2.txt', 'Hello content !',function(err)
   {
       if(err) throw err;
       console.log('the Date has been written !');
   })
})