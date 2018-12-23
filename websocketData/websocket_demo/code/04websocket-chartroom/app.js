const ws = require("nodejs-websocket");

let count = 0;
const TYPE_ENTER = 0;
const TYPE_LEAVE = 1;
const TYPE_MSG = 2;
// 每一个链接到服务器的用户都会有一个conn链接对象
const server = ws.createServer(conn => {
  console.log("新的链接....");
  count++;
  conn.userName = `用户${count}`;
  broadcast({
    type: TYPE_ENTER,
    msg: `${conn.userName}进入了聊天室`,
    time: new Date().toLocaleTimeString()
  });
  conn.on("text", data => {
    broadcast({
      type: TYPE_MSG,
      msg: data,
      time: new Date().toLocaleTimeString()
    });
  });
  conn.on("close", data => {
    count--;
    broadcast({
      type: TYPE_LEAVE,
      msg: `${conn.userName}离开了聊天室`,
      time: new Date().toLocaleTimeString()
    });
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
    conn.sendText(JSON.stringify(msg));
  });
}
