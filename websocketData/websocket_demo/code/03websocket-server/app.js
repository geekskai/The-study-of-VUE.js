const ws = require("nodejs-websocket");

var server = ws.createServer(function(conn) {
  console.log("接收到了请求...");
  conn.on("text", data => {
    // 接收到客户端的文本内容时触发
    console.log("data", data);
    conn.send(data.toUpperCase());
  });
});

server.listen(3000, () => {
  console.log("服务启动成功...");
});
