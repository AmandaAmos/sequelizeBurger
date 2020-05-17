//and we're off to the races... or to the grill for good burgers

var express = require("express");
var bodyparser = require("body-parser");
var exphbs = require("express-handlebars");



var app = express();

var PORT = process.env.PORT || 3306;


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use(routes);


app.listen(PORT, function(){
    console.log("Server listening on" + PORT);
});