// Dependencies
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('../data/friends.js');

// Exporting METHODS here
module.exports = function (app) {

    // Routes

    // All friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    // Adding new friend
    app.post("/api/friends", function (req, res) {

        var userInput = req.body;

        var userRatings = userInput.ratings;

        // Finding your bestest friend
        var bestFriend = {
            name: "",
            image: "",
            matchDifference: 500
        }

        // Loop through possibilities and compare
        for (var i = 0; i < friends.length; i++) {

            var newDiff = 0;

            for (var j = 0; j < userRatings.length; j++) {

              newDiff = newDiff + Math.abs(userRatings[j] - friends[i].ratings[j]);

            }

            if (newDiff < bestFriend.matchDifference) {

                bestFriend.matchDifference = newDiff;

                bestFriend.name = friends[i].name;

                bestFriend.image = friends[i].image;

            }

        }


        // Add user to friends list
        friends.push(userInput);


        // Send result
        res.json({resultName: bestFriend.name, resultImage: bestFriend.image});


    });



}

