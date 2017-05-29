//importing module
const http = require('http'); //core module
const fs = require('fs'); //file system load in..

const hostname = '127.0.0.1'; //out local host
const port = 3000; //

fs.readFile('index.html', (err, html) => { //call back.. arrow function
  if (err) {
    throw err;
  }
  const server = http.createServer((req, res) => { //create a function
    res.statusCode = 200; //everything is ok
    res.setHeader('Content-type', 'text/html'); //set context type to text plain html
    res.write(html);
    res.end();
    //res.end('Hello World');
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
  });
});
