'use strict';

const express = require('express');
const app = express();
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');


app.use(logger);


app.get('/',(req,res)=>{
  res.status(200).send('Server Is Working')
})

app.get('/person',validator,(req,res)=>{
  res.status(200).json({
    name:req.query.name
  })
})




app.use('*',notFound);
app.use(errorHandler);

function start(port){
  app.listen(port,()=>{
    console.log('Server listening at PORT : '+ port)
  })
}
module.exports ={
  server: app,
  start: start
}
