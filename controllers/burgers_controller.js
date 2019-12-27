express = require("express");
burger = require("../config/models/burger.js");

// Create express app instance.
var app = express();

app.get("/index", function(req, res) {
  
  // We return the html file with handlebars here
//   res.render("index", lunches[0]);  // but not "lunches" !!


});

// export router