const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const mongoose = require('mongoose');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/mobile-legends-heroes');
mongoose.Promise = global.Promise;

//initialize body-parser
app.use(bodyParser.json());

//initiliaze routers
app.use('/api',routers);

//error middleware
app.use(function(err, req, res, next){
    res.status(422).send({err: err.message});
});

app.listen(process.env.port || 5000, function(){
    console.log('express app now listening request')
});