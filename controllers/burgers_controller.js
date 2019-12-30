// get my model for the SQL queries
dbqueries = require("../models/burger.js");

// get express & router to create routes
const express = require("express");
const router = express.Router();

// Create express app instance.

// const renderHtml = {

router.get("/index", function(request, result) {
  // NOTE:  burgers, uneaten & devoured are global arrays

  // Get the data from the db as eaten and devoured.
  // burgers is an array of objects.
  //   each object has:
  //     id:  integer - unique identifier
  //     burger_name:  string
  //     devoured:  boolean - true if eaten (devoured)
  dbqueries.getBurgers(function(data) {
    console.log("\n*** In router.get,  data (burgers):");
    console.log(data);
    burgers = data;

    // get uneaten and devoured arrays from burgers
    uneaten = burgers.filter(function(burger) {
      return !burger.devoured;
    });
    devoured = burgers.filter(function(burger) {
      return burger.devoured;
    });

    // render the html with the handlebars substitutions
    result.render("index", {
      uneaten: uneaten,
      devoured: devoured
    });
  });
});

// Export so other modules can use
module.exports = router;
