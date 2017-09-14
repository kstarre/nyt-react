// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require models
let Article = require("./models/article");

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
app.get("/api/saved", function(req, res) {
	Article.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
});

app.post("/api/saved", function(req, res) {
	let newArticle = new Article(req.body);

	newArticle.save(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(doc);
		}
	});
});

app.delete("/api/saved", function(req, res) {
	console.log(req.body._id);

	//let id = req.body.

/*	Article.findByIdAndRemove(id, function(err) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Document removed");
		}
	});*/
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});


// Start express server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});