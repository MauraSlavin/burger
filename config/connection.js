// Connect NODE to MySQL
const mysql = require("mysql");

// Set up the connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "March14Freedom!",
  database: "burgers_db"
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