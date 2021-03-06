const http = require("http");

const hostname = "192.168.0.2"; // 서버 컴퓨터의 ip
const port = 3001; //
const server = http.createServer((req, res) => {
  // createServer 명령을 통해 서버 한대를 만든다.
  res.statusCode = 200; // 통신 성공
  res.setHeader("Content-Type", "text/html");
  res.end("<button>click!</button>");
});

server.listen(port, hostname, () => {
  // 만든 서버가 이 컴퓨터에 리스닝을 하도록 시킨다.
  // 첫번째 인자 port는 3000번이고 hostname은 이 컴퓨터의 hostname 같은 것
  console.log(`Server running at http://${hostname}:${port}/`);
});
