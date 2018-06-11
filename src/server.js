var port = process.env.PORT || 3000;
var app = require('http').createServer(handler);

function handler (req, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hi, you are number 123 visitors");
  response.end();
}
app.listen(port);
