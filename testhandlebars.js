// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Data
var burgers = [
  {
    id: 1,
    burger_name: "Tomato Spinach Mushroom Burger",
    devoured: false
  },
  {
    id: 2,
    burger_name: "Just a Burger",
    devoured: false
  },
  {
    id: 3,
    burger_name: "BLT Burger",
    devoured: true
  }
];

console.log(burgers);
  const uneaten = burgers.filter(burger => !burger.devoured);
  const devoured = burgers.filter(burger => burger.devoured);
  console.log("Uneaten:  ");
  console.log(uneaten);
  console.log("devoured:  ");
  console.log(devoured);

// Routes
app.get("/index", function(req, res) {
  // get uneaten and devoured arrays from burgers
  //   uneaten = burgers.filter(function(burger) {
  //     return !burger.devoured;
  //   });

    // render the html with the handlebars substitutions
  res.render("index", {
      uneaten: uneaten, 
      devoured: devoured
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
