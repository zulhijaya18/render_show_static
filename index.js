const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('nama saya zulhijaya\nsaya belum menikah');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});