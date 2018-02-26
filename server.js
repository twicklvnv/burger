//setting up required packages
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

//var PORT = process.env.PORT ||8080;

var app = express();

app.use(express.static(process.cwd() + 'public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));

//app.use(bodyParser.json());


//setting handlebars as the view engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

var PORT = 8080;
app.listen(PORT, function() {
    console.log("App listening at: " + PORT);
})
