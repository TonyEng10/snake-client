const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on("connect", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    conn.write("Name: TE");
  });
// interpret incoming data as text
conn.setEncoding("utf8");

return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = connect;