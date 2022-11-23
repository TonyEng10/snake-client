const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on("connect", (data) => {
    console.log("you are now connected");
  });
  conn.on("connect", () => {
    conn.write("Name: TE");

  });
  conn.on("connect", (data) => {
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 100)
    // setInterval(() => {
    //   conn.write("Move: right")
    // }, 150)
    
    setTimeout(() => {
    conn.write("Move: up");
    }, 200)
    setTimeout(() => {
      conn.write("Move: left");
    }, 400)
    setTimeout(() => {
      conn.write("Move: down");
    }, 600)
    setTimeout(() => {
      conn.write("Move: left");
    }, 800)
    setTimeout(() => {
      conn.write("Move: down");
    }, 1000)
    setTimeout(() => {
      conn.write("Move: left");
    }, 1200)
  
  });
// interpret incoming data as text
conn.setEncoding("utf8");

return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = connect;