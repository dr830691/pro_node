var url= require('url');
var adr ='https://www.w3schools.com/nodejs?year=2017&month=february';
var q = url.parse(adr,true);

 
 
console.log(q.host);
// console.log(q.port);
//console.log(q.hostname);    

console.log(q.search);
console.log(q.query.year);
console.log(q.pathname);
console.log(q.path);
