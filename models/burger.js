//model to interface with db
var orm = require("../config/orm.js");

console.log("got this far");
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },

    create:function(name, cb) {
        orm.create("burgers", name, cb);
    },

     update: function(id, cb) {
        orm.update("burgers", id, cb);
     }
           
};

module.exports = burger;