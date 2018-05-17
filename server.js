var http = require("http");
var fs = require("fs");
var express = require("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var app = express();


var PORT = process.env.PORT || 3000;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});






  
  