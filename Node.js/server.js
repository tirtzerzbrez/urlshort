var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const url = 'mongodb+srv://Arya:ocFtLqEjLzTZY1vg@cluster0.5eb3m.mongodb.net/shorturl?retryWrites=true&w=majority';
const mongoose = require('mongoose');
var client = require('mongodb').MongoClient;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));
app.use(express.urlencoded({extended:false}))
app.use

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
app.get('/shorting',function(req,res){
  res.render('pages/shorting')
})
app.get('/hasil',function(req,res){
  res.render('pages/hasil')
})
app.listen(5000);
console.log("dah nyala nih!!!");

client.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('shorturl');
    const dataurlCollection = db.collection('dataurl');
    const keluhanCollection = db.collection('keluhan');

    app.post('/urllama', (req, res) => {
      dataurlCollection.findOneAndUpdate({id : "1"}, {$set: {urllama : req.body}})
      .then(result => {
        console.log(result)
    })
      .catch(error => console.log(error));
      res.render('pages/shorting');
  })
    
    app.post('/urlpush', (req,res) => {
      dataurlCollection.findOneAndUpdate({id :"3"},{$set:{urlsementara :req.body}})
      dataurlCollection.insertOne(req.body)
        .then(result => {
          var x = dataurlCollection.findOne({id:"3"}, function(err, result) {
            if(err){
              console.log(err);
          }
            else{
              console.log(result.urlsementara.inputbawah);
          }
          })
          res.redirect('/hasil');
        })
        .catch(error => console.log(error));
    })

    app.post('/keluhan', (req, res) => {
        keluhanCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/contact')
        })
          .catch(error => console.error(error));

      })

      app.post('/linkbaru', (req, res) =>
      {
        dataurlCollection.findOneAndUpdate({id : "2"}, {$set: {urlbaru : req.body}})
      .then(result => {
        console.log(result)
    })
      .catch(error => console.log(error));
      res.render('pages/index');
      })
  })
  