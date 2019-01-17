const express = require ('express');

const app = express();

//initialize body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//initiliaze routers
const routers = require('./routers');
app.use('/api',routers);

app.listen(process.env.port || 5000, function(){
    console.log('express app now listening request')
});