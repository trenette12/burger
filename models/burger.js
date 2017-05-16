var orm = require("../config/orm.js");

//Calling the ORM functions with specific data//
orm.selectAll("*", "burgers");
orm.insertOne(4, "Philly Cheesesteak Burger", true);
orm.updateOne("burgers", "burger_name", "Veggie Burger", "id", 2);
