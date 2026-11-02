// Jacques, Aiden, Matheus
// Requires http module, Node.js built-in module for creating HTTP servers

const http = require('http'); //import http module
const fs = require('fs'); //read and write files

const PORT = 3000;

const server = http.createServer((req, res) => {
  const REQ_URL = (req.url === '/' || req.url === '/login'); //check if url is / or /login
  const POST = (req.method === 'POST'); //check if method is POST
  const GET = (req.method === 'GET'); //check if method is GET

  // Handle GET request for login page
  if (GET && REQ_URL) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //res head
    return res.end(fs.readFileSync(__dirname + '/login/index.html'));
  }

  // Handle POST request for login
  if (POST && REQ_URL) {
    let body = ''; //
    req.on('data', c => body += c); //event listener; appends data to body var

    return req.on('end', () => {
      let creds;

      try { creds = JSON.parse(body); }
      catch { res.writeHead(400); return res.end('Bad JSON'); }

      const ADMIN = (creds.username === 'admin'); //check if user is admin
      const USER = (creds.username === 'user'); //check if user is user

      if (ADMIN && creds.password === 'password123') {
        res.writeHead(200, { 'Content-Type': 'text/plain' }); //successful login
        return res.end('Login successful');
      }

      res.writeHead(401, { 'Content-Type': 'text/plain' }); //else, unauthorized
      res.end('Invalid credentials'); //return invalid credentials
    });

  };

  //handles 404 errors
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Page not found');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
