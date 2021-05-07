/*var nodeMailer = require('nodemailer');
var transporter =nodeMailer.createTransport({
    service:'gmail',
    auth:
    {
        user:'dr830691@gmail.com',
        pass:'Hilife@8826'
    }

});
var mailOptions= {
    from: 'dr830691@gmail.com',
    to: 'ravi860411@gmail.com' ,
    subject: " This is a nodejs mail",
    text: " i want to talk you"
};
transporter.sendMail(mailOptions, function( error,info){
    if(error)
    console.log("error !" );
    else 
    console.log("The email has been sent info: "+ info.response );

});
*/

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dr830691@gmail.com',
    pass: 'pwwxinnyqwyivtab'
  }
});

var mailOptions = {
  from: 'dr830691@gmail.com',
  to: 'ravi860411@gmail.com,rockyroy2220@gmail.com',
  subject: 'This is the demo mail',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
