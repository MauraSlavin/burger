orm = require("./connection.js");

// methods to query SQL db

selectAll();


insertOne();


updateOne();

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};