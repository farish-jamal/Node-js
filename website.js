const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
//   console.log(req);
res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/home") {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html', 'utf-8');
    res.end(data);
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>Welcome to about</h1>");
  }else{
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`server is listing on ${port}`);
});
