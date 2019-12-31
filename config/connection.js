// Connect NODE to MySQL
const mysql = require("mysql");

// Set up the connection
const connection = mysql.createConnection({
  host: "r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "h08f3git2kpf5rdg",
  password: "lxsy255201pk6igc",
  database: "fec64djlylwegraa"
});

// open connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("db connected as id " + connection.threadId);
});

// Make available to other modules
module.exports = connection;