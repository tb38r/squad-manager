const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.end("Hello world");

  if(req.body){}
});

server.listen(port, () => {
  console.log(`Server start running on port ${port}`);
});
