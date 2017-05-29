var express = require('express'); //import
var bodyParser = require('body-parser');
var path = require('path'); //core module

var app = express();

var logger = function(req, res, next){
  console.log('Logging...');
  next();
}

app.use(logger); //middle ware

app.get('/', function(req,res){ //define a route
  res.send('Hello World');
})

//app.use(logger); dont put here

app.listen(3000, function(){
  console.log('server started on port 3000...');
})
