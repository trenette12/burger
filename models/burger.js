var orm = require("../config/orm.js");

//Calling the orms functions with specific data//
var burger = {
  all: function(edb) {
    orm.all('burgers', function(res) {
      edb(res);
    });
  },
  create: function(name, edb) {
    orm.create('burgers', [
      'burger_name', 'devoured'
    ], [
      name, false
    ], edb);
  },
  update: function(id, edb) {
    var burgerid = 'id=' + id;
    orm.update('burgers', {
      devoured: true
    }, burgerid, edb);
  }
};

module.exports = burger;
