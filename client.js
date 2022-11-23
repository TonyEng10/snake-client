const net = require("net");
const { IP, PORT } = require("./constants")
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("connect", (data) => {
    console.log("you are now connected");
  });
  conn.on("connect", () => {
    conn.write("Name: TE");

  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
// interpret incoming data as text
conn.setEncoding("utf8");

return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };