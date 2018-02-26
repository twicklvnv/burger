//state what is required for this file
var express = require("express");
var router = express.Router();

//import the model burger
var burger = require("../models/burger.js");

//the various routes and relevant code
router.get("/", function(req, res) {
    burger.all(function(burger_data) {
       console.log(burger_data);
       res.render("index", {burger_data});
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;