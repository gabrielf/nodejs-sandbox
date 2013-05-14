var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
})

var listenTo = process.env.BOXEN_SOCKET_DIR + '/nodejs-sandbox';

server.listen(listenTo, function () {
  console.log('Server listening to ' + listenTo);
});
