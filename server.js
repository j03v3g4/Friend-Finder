// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();
var PORT = 3000;

// Data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
