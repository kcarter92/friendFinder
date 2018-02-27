var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// morgan logs requests to server from client
app.use(morgan('tiny'));

//routes for API and HMTL requests, respectively 

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});