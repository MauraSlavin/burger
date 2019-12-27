orm = require("../config/orm.js");
// test queries

const dbqueries = {
var result = orm.insertOne("burgers", ["burger_name"], ["Favorite"]);
console.log("\n insert Favorite; result:  ");
console.log(result);

result = orm.selectAll("burgers");
console.log("\n select *; result:  ");
console.log(result);

result = orm.updateOne("burgers", 1, "devoured", true);
console.log("\n update burger 1 to devoured true; result:  ");
console.log(result);

result = orm.selectAll("burgers");
console.log("\n select *; result:  ");
console.log(result);
}

// code to call ORM functions using burger specific input for the ORM


export.modules = dbqueries;