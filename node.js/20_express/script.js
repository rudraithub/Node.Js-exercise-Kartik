const express=require('express');
const app=express();
app.use(function(req,res,next){
    console.log("middalware starting")
    next()
})

app.get('/',function(req,res){
    res.send('hello world');
})
app.get('/profile',function(req,res){
    res.send('hello from profile');
})
app.get('/profile/:username',function(req,res){
    res.send(`hello from ${req.params.username} `);
})

app.listen(8000);

// const express=require("express")
// const app=express()
// app.set("view engine","ejs");
// app.get('/',function(req,res){
//         res.render("index");
//     });
//     app.listen(8000);

// expree JS
// install
// express js boilerplate code
       //go to npm
       //search express
       //copy the code
// express js ejs setup
//     install ejs
//     set view engine
//     create ejs files
//     render ejs files inside Router

//  express static files setup
//  architecture of public folder

// public
//view
// index/app

// const express = require('express');

// const app = express();
// // const path = require('path')

// app.set("view engine","ejs");
// // /public
// // const filepath = path.join(__dirname, '.')

// app.use(express.static("./public"))

// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.listen(3000);