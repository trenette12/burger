var express = require("express");
var app = express();
var router = express.Router();
var burger = require("../models/burger.js");
//Routes for getting, creating and updating the Burger Object//
router.get("/", function(req, res) {
  burger.selectAll(function(data){
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(function(data){
    var burgerObjectTwo = {
      burger: data
    };
    res.redirect("/");
  });
});

router.put("/:id", function(req,res) {
  burger.updateOne(function(data){
    var burgerObjectThree = {
      burger: data
    };
    res.redirect("/");
  });
});

module.exports = router;
