//import mysql connection
var connection = require("../config/connection.js");

//object for sql functions
var orm = {

        //select all from db
        all: function(tableInput, cb) {
            connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
                if (err) throw err;
                cb(result);
                console.log("howdy");
            })
        },
    
        //create a new burger
        create: function(tableInput, val, cb) {
            connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result) {
                if (err) throw err;
                cb(result);
            });
        },
    
        //update a burger
        update: function(tableInput, condition, cb) {
            connection.query("UPDATE "+tableInput+" SET devoured=true WHERE id=" +condition+ ";", function(err, result){
            if (err) throw err;
            cb(result);
        })
        }
 };

    module.exports = orm;