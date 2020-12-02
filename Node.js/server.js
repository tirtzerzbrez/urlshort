var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));

app.get('/',function(req,res){
    res.render('pages/index');
})

app.get('/aboutus',function(req,res){
    res.render('pages/aboutus');
})

app.get('/privacy',function(req,res){
    res.render('pages/privacy');
})

app.get('/contact',function(req,res){
    res.render('pages/contact');
})

app.get('/petunjuk',function(req,res){
    res.render('pages/petunjuk');
})

app.get('/tos',function(req,res){
    res.render('pages/termofservice');
})

app.post('/urllama',function(req,res){
    console.log(req.body);
    res.render('pages/shorting');
})

app.post('/keluhan',function(req,res){
    console.log(req.body);
})

app.listen(5000);
console.log("dah nyala nih!!!")