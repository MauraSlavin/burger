// Get my SQL connection.
const connection = require("../config/connection.js");

// methods to query SQL db
const orm = {

// retrieve the whole table
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(error, result) {
      if (error) {throw error};
      // console.log("Select *: ");
      // console.log(result);
       cb(result);
    });
  },

// insert a new row to the table
  insertOne: function(table, columns, data, cb) {
    queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, columns, data], function(error, result) {
      if (error) {throw error};
    //   console.log("Inserted id: ");
    //   console.log(result.insertId);
    //   return result.insertId;
    cb(result);
    });
  },

// Update one value of one row given the id
  updateOne: function(table, id, column, newvalue, cb) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
    connection.query(queryString, [table, column, newvalue, id], function(error, result) {
      if (error) {throw error};
    //   console.log("# rows updated: ");
    //   console.log(result.affectedRows);
    //   return result.affectedRows;
      cb(result);
    });
  }
};

module.exports = orm;