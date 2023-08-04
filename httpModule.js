const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an http server
// Return “Hello world” from the response


// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with content type
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the "Hello world" response
  res.end('Hello world\n');
});

// Define the port for the server to listen on
const port = 3000;

// Start the server and make it listen on the defined port
server.listen(port, () => {
  console.log(`Server is running and listening on http://localhost:${port}/`);
});

