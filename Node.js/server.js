var express = require('express');
var bodyParser= require('body-parser')
var app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }))

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
    res.render('views/petunjuk');
})

app.get('/tos',function(req,res){
    res.render('pages/termofservice');
})

app.get('/contact', (req, res) => {})
app.post('/DataDiri', (req, res) => {
    console.log(req.body)
})

app.get('/', (req, res) => {})
app.post('/linklama', (req, res) => {
    console.log(req.body);
    res.redirect('/shorting')
})

app.listen(5000);
console.log("dah nyala nih!!!")