// Dependencies
var bodyParser = require("body-parser");
var path = require("path");


// Exporting METHODS here
module.exports = function (app) {

    // Routes
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

}