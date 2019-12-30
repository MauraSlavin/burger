// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
// var routes = require('./routes');
const cntrlr  = require("./controllers/burgers_controller.js");

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

var path = require("path"); //  Testing
app.use(express.static(path.join(__dirname, "public")));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get the routes
const routes = require('./controllers/burgers_controller.js')

app.use(routes);

// global variables
//   objects have:
//       id:  integer - unique identifier
//       burger_name: string
//       devoured:  boolean (true if eaten)
burgers = []; // array of objects including all burgers in the db
uneaten = []; // array of objects including only uneaten burgers
devoured = []; // array of objects including only eaten (devoured) burgers


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Tell user when server is ready
  console.log("Server listening on: http://localhost:" + PORT);
});
