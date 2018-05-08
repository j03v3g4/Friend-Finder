// Load Data
var friends = require("../data/friends");


// Routing

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    res.json(friendsArray);
  });
}
