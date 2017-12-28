var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post')

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/api/posts', function(req, res) {
  res.json([{
    username: 'dickeyxxx',
    body: 'node rocks!'
  }]);
});

app.post('/api/posts', function(req, res){
  //console.log(req.body);
  console.log('post received!');
  console.log(req.body.username);
  console.log(req.body.body);



  res.sendStatus(201);
});

app.listen(3000, function(){
  console.log('Server listening on', 3000);
});
