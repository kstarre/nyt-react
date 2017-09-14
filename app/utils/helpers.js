// Require axios for get/post requests
const axios = require("axios");

// NYT API key
const nytAPI = "9c0a8c4ca8a246569e2463b022067418";

module.exports = {
	runQuery: function(searchTerm, begin_date, end_date) {

		let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + begin_date + "&end_date=" + end_date + "&api-key=" + nytAPI;

		return axios.get(queryURL).then(function(res) {
			console.log(res.response.docs);
			//return res.response;
		});
	};
	getArticles: function() {
		return axios.get("/api/saved");
	},
	saveArticles: function(articleData) {
		return axios.post("/api/saved");
	},
	deleteArticles: function(articleID) {
		return axios.delete("/api/saved");
	}
};