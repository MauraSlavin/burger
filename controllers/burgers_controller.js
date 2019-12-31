// get my model for the SQL queries
const dbqueries = require("../models/burger.js");

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
    burgers = data;

    // get uneaten and devoured arrays from burgers
    // uneaten = burgers.filter(function(burger) {
    //   return !burger.devoured;
    // });
    // devoured = burgers.filter(function(burger) {
    //   return burger.devoured;
    // });

    // render the html with the handlebars substitutions
    result.render("index", {
      burgers: burgers
    });
  });
});

// add new burger
router.post("/api/burgers", function(request, resultAPI) {
  dbqueries.addBurger(request.body.new_burger, function(result) {
    // result.insertId is part of the result returned.
    resultAPI.json({ id: result.insertId });
    // resultAPI.render("index", {
    //   burgers: burgers
    // });
  });
});

// change devoured to true for burger being enjoyed.
router.put("/api/burgers/:id", function(request, resultAPI) {
  var burger_id = request.params.id;

  console.log("id: ", burger_id);

  dbqueries.eatBurger(burger_id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return resultAPI.status(404).end();
    } else {
      resultAPI.status(200).end();
    }
  });
});

// Export so other modules can use
module.exports = router;
