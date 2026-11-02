// Jacques, Aiden, Matheus
// Requires http module, Node.js built-in module for creating HTTP servers

const http = require('http'); //import http module
const fs = require('fs'); //read and write files
const jwt = require('jsonwebtoken'); //json web token for authentication

const PORT = 3000;
const SECRET = process.env

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' }); //res head
  res.end(JSON.stringify({ message: "Hello, World!" })); //res body
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});