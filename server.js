// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
// main is the name of the handlebars file in the layouts file
//     can be something different, as long as the filename matches the name here
//        and the filetype is handlebars?
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// test queries  ******* Moved to burger.js
// orm = require("./config/orm.js");
//
// var result = orm.insertOne("burgers", ["burger_name"], ["Favorite"]);
// console.log("\n insert Favorite; result:  ");
// console.log(result);
//
// result = orm.selectAll("burgers");
// console.log("\n select *; result:  ");
// console.log(result);
//
// result = orm.updateOne("burgers", 1, "devoured", true);
// console.log("\n update burger 1 to devoured true; result:  ");
// console.log(result);
//
// result = orm.selectAll("burgers");
// console.log("\n select *; result:  ");
// console.log(result);





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});