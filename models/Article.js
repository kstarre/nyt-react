// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required
  title: {
    type: String,
    required: true
  },
  // link is a required
  date: {
    type: Date,
    required: true
  },
  // url is required
  url: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;