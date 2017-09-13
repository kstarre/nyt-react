// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require models


// 
const PORT = process.env.PORT || 3000;
let app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

// Mongoose connection
mongoose.connect("mongodb://localhost/nyt-react", { useMongoClient: true });

// Routes




// Start express server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});