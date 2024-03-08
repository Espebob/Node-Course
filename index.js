const http = require('http');
const fs = require('fs'); // For logging

const server = http.createServer((req, res) => {
  // Respond with a message
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello from your Node.js server!');
  res.end();

  // Log request details with timestamp
  const logMessage = `[${new Date().toISOString()}] - ${req.method} ${req.url}`;
  fs.appendFile('logs.txt', logMessage + '\n', (err) => {
    if (err) throw err;
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!!!');
});