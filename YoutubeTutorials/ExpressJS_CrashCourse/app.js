var express = require('express'); //import
var bodyParser = require('body-parser');
var path = require('path'); //core module

var app = express();

/*
var logger = function(req, res, next){
  console.log('Logging...');
  next();
}
app.use(logger); //middle ware. runs everytime when application is loaded
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//place to put static resourses.. jquerty, css
app.use(express.static(path.join(__dirname, 'public')));

var users = [{
    id: 1,
    first_name: 'John',
    last_name: "Doe",
    email: 'johndoe@gmail.com'
  },
  {
    id: 2,
    first_name: 'Sara',
    last_name: "Peters",
    email: 'sarapeters@gmail.com'
  },
  {
    id: 2,
    first_name: 'Kalle',
    last_name: "Anka",
    email: 'kalleanka@gmail.com'
  }
]

app.get('/', function(req, res) { //define a route
  res.render('index', {
    title: 'Customers',
    users: users
  });
});

//app.use(logger); dont put here

app.listen(3000, function() {
  console.log('server started on port 3000...');
})
