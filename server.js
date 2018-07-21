// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static(__dirname + '/app/public'));


// Adding application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// Listening on PORT
app.listen(PORT, function() {
    console.log('Application is listening on PORT: ' + PORT);
  });






