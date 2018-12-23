const ws = require("nodejs-websocket");

let count = 0;
// 每一个链接到服务器的用户都会有一个conn链接对象
const server = ws.createServer(conn => {
  console.log("新的链接....");
  count++;
  conn.userName = `用户${count}`;
  broadcast(`${conn.userName}进入了聊天室`);
  conn.on("text", data => {
    broadcast(data);
    console.log("data");
  });
  conn.on("close", data => {
    console.log("close");
    count--;
    broadcast(`${conn.userName}离开了聊天室`);
  });
  conn.on("error", data => {
    console.log("err", data);
  });
});

server.listen("3000", () => {
  console.log("监听端口3000");
});
function broadcast(msg) {
  server.connections.forEach(function(conn) {
    conn.sendText(msg);
  });
}
