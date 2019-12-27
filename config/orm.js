// var connection = require("./connection.js");
const connection = require("./connection.js");

// methods to query SQL db
// var orm = {
const orm = {

// retrieve the whole table
  selectAll: async function(table) {
    const queryString = "SELECT * FROM ??;";
    await connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log("Select *: ");
      console.log(result);
      return result;
    });
  },

// insert a new row to the table
  insertOne: async function(table, columns, data) {
    const queryString = "INSERT INTO ?? (??) VALUES (?);";
    await connection.query(queryString, [table, columns, data], function(
      err,
      result
    ) {
      if (err) throw err;
    //   console.log("Inserted id: ");
    //   console.log(result.insertId);
    //   return result.insertId;
    });
  },

// Update one value of one row given the id
  updateOne: async function(table, id, column, newvalue) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
    await connection.query(queryString, [table, column, newvalue, id], function(
      err,
      result
    ) {
      if (err) throw err;
    //   console.log("# rows updated: ");
    //   console.log(result.affectedRows);
    //   return result.affectedRows;
    });
  }
};

module.exports = orm;