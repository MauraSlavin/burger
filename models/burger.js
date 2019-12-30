// get my orm modules
orm = require("../config/orm.js");

// code to call ORM functions using burger specific input for the ORM

const dbqueries = {

  // get all the burgers from the database
  getBurgers: function(cb) {
    orm.selectAll("burgers", function(results) {
      burgers = results;
      cb(results);
    });
  },  // end of getBurgers

  // add a new burger to the database
  addBurger: function(burger_name, cb) {
    orm.insertOne("burgers", ["burger_name"], burger_name, function(results) {
      cb(results);
    });
  },  // end of addBurger

  // change a burger to devoured
  eatBurger: function(id, cb) {
    orm.updateOne("burgers", id, "devoured", true, function(results) {
      cb(results);
    });
  }  // end of eatBurger

};

// make available to other modules
module.exports = dbqueries;