"use strict";

const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  response.write("<h1> Javascript Project | 1 </h1>");
  response.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("Error", (error) => {
  console.error("Server error:", error.message);
});
