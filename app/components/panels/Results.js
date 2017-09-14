// Include React
const React = require("react");

let Results = React.createClass({
	handleSubmit: function(event) {
		event.preventDefault();
	},
	getResults: function(list) {
		for (var i = 0; i < 5; i++) {
			return (
				<p>{this.props.list[i].headline.main}</p>
				<p>{this.props.list[i].web_url}</p>
				<p>{this.props.list[i].pub_date}</p>
				<form onSubmit={this.handleSubmit}>
				  <div className="form-group">
				    <input
				   		type="hidden"
				    	value={this.props.list[i].headline.main}
				    	name="title"
				    />
				    <input
				      value={this.props.list[i].pub_date}
				      type="hidden"
				      name="date"
				    />
				    <input
				      value={this.props.list[i].web_url}
				      type="hidden"
				      name="url"
				    />
				    <button
				      className="btn btn-primary"
				      type="submit"
				    >Submit
				    </button>
				  </div>
				</form>
			);
		}
	},
	render: function() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title text-center">Results</h3>
			  </div>
			  <div className="panel-body text-center">

			    <h1>Address:</h1>
			    <p>{this.props.list}</p>
			  </div>
			</div>
		);
	}
});

module.exports = Results;