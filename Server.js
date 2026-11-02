// Jacques, Aiden, Matheus
// Requires http module, Node.js built-in module for creating HTTP servers

const http = require('http'); //import http module
const fs = require('fs'); //read and write files
const path = require('path');
const jwt = require('jsonwebtoken'); //json web token for authentication

const PORT = 3000;
const SECRET = process.env

const server = http.createServer((req, res) => {
  const pathname = req.url.split('?')[0];
  if (!['/', '/login', '/login/', '/login/index.html'].includes(pathname)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
    return;
  }
  fs.readFile(path.join(__dirname, 'login', 'index.html'), (error, html) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Unable to load the login page.');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
