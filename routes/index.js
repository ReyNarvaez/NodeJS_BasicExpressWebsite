var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');

router.get('/',function(req,res){
  res.render('index');
});

router.get('/about',function(req,res){
  res.render('about');
});

router.get('/contact',function(req,res){
  res.render('contact');
});

router.post('/contact/send',function(req,res){

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  
  //service example: 'Hotmail' or 'Gmail' 

  var transporter = nodeMailer.createTransport({
    service:'<YOUR_SERVICE>',
    auth: {
      user: '<YOUR_EMAIL>',
      pass: '<YOUR_PASSWORD>'
    }
  });

  var mailOptions = {
    from: '<YOUR_EMAIL>',
    to: '<TO_EMAIL>',
    subject: 'NodeJS App Contact Form Test',
    html: '<p>Contact form details:</p><ul><li>Name: ' + name + '</li><li>Email: ' + email + '</li><li>Message: ' + message + '</li></ul>'
  };

  transporter.sendMail(mailOptions,function(error,info){
    
    if(error){

      console.log(error);
    }
    else{

      console.log('Message Sent: ' + info.response);
    }

    res.redirect('/');
  })
});

module.exports = router;