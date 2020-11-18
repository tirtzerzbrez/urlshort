var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('pages/index');
})

app.get('/aboutus',function(req,res){
    res.render('pages/aboutus');
})

app.get('/shorting',function(req,res){
    res.render('pages/shorting');
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

app.listen(5000);
console.log("dah nyala nih!!!")