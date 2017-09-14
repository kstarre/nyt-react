// Include React
const React = require("react");

// Require utility for making API calls
const helpers = require("../utils/helpers");

// Import sub-components
let Saved = require("./panels/Saved");
let Search = require("./panels/Search");
let Results = require("./panels/Results");

let Main = React.createClass({
	getInitialState: function() {
		return { searchTerm: "", beginDate: "", endDate: "", results: [], savedArticles: [] };
	},
	componentDidMount: function() {
		helpers.getArticles().then(function(response) {
			this.setState({
				savedArticles: response
			})
		}.bind(this));
	},
	componentDidUpdate: function(prevProps, prevState) {
		if ( (prevState.searchTerm !== this.state.searchTerm) || (prevState.beginDate !== this.state.beginDate) || (prevState.endDate !== this.state.endDate) ) {

			helpers.runQuery(this.state.searchTerm, this.state.beginDate, this.state.endDate).then(function(data) {

				this.setState({ results: data });

		    // This code is necessary to bind the keyword "this" when we say this.setState
		    // to actually mean the component itself and not the runQuery function.
			}.bind(this));
		}
	},
	setTerm: function(term) {
		this.setState({ searchTerm: term});
	},
	setBeginDate: function(begin_date) {
		this.setState({ beginDate: begin_date});
	},
	setEndDate: function(end_date) {
		this.setState({ endDate: end_date});
	},
	setSavedArticles: function(saved_articles) {
		this.setState({ savedArticles: saved_articles});
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1 className="text-center">NYT Search</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Search setTerm={this.setTerm} setBeginDate={this.setBeginDate} setEndDate={this.setEndDate} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Results list={this.state.results} savedList={this.state.savedArticles} setSavedArticles={this.setSavedArticles} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Saved savedList={this.state.savedArticles} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Main;