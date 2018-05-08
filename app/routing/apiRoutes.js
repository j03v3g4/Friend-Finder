// Load Data

var friends = require("../data/friends");


// Routing

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
      console.log(res);
  });
}
