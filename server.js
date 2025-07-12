// Require the built-in 'http' module to create an HTTP server.
import { createServer } from "http";

//the port the server will listen on.
const port = 3000;

// Create the HTTP server.
// The createServer method takes a callback function that is executed
// every time a request is made to the server.
// 'req' (request) object contains information about the incoming request.
// 'res' (response) object is used to send a response back to the client.
const server = createServer((req, res) => {
  res.statusCode = 200; //HTTP status code 200 (OK).
  // Set the Content-Type header to indicate that the response is HTML.
  res.setHeader("Content-Type", "text/html");
  // Send the HTML response to the client.
  res.end("<h1>Hello Node!!!!</h1>\n");
});

// Start the server and make it listen for incoming requests on the specified port.
server.listen(port, () => {
  // Log a message to the console once the server starts successfully.
  console.log(`Server running at http://localhost:${port}/`);
});

// To run this file:
// 1. Save it as server.js
// 2. Open your terminal or command prompt
// 3. Navigate to the directory where you saved the file
// 4. Run the command: node server.js
// 5. Open your web browser and go to http://localhost:3000
