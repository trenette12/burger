var connection = require("./connection.js");
//ORM object that will hold all functions
var orm = {
  selectAll: function(whatToSelect, table){
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [whatToSelect, table],function(err, result){
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  insertOne: function(table, valOfCol1, valOfCol2, valOfCol3){
    var queryString = "INSERT INTO ?? (? ?? ??) VALUES(? ?? ??)";
    connection.query(queryString, [table, valOfCol1, valOfCol2, valOfCol3], function(err,result){
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  updateOne: function(table, valOfCol1, valOfCol2, colName, colName2){
    var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ?";
    connection.query(queryString, [table, valOfCol1, valOfCol2, colName, colName2], function(err,result){
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
};

module.exports = orm;
