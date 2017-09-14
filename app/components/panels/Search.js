// Include React
const React = require("react");

let Search = React.createClass({
	getInitialState: function() {
		return { term: "", begin_date: "", end_date: "" };
	},
	handleChange: function(event) {
		this.setState({ term: event.target.value, begin_date: event.target.value, end_date: event.target.value });
	},
	handleSubmit: function(event) {
		event.preventDefault();

		this.props.setTerm(this.state.term);
		this.props.setBeginDate(this.state.begin_date);
		this.props.setEndDate(this.state.end_date);

		this.setState({ term: "", begin_date: "", end_date: "" });
	},
	render: function() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title text-center">Query</h3>
			  </div>
			  <div className="panel-body text-center">
			    <form onSubmit={this.handleSubmit}>
			      <div className="form-group">
			        <h4>
			          <strong>Search Term</strong>
			        </h4>
			        <input
			          value={this.state.term}
			          type="text"
			          className="form-control text-center"
			          id="term"
			          onChange={this.handleChange}
			          required
			        />
			        <br />
			        <h4>
			          <strong>Search From: (YYYYMMDD)</strong>
			        </h4>
			        <input
			          value={this.state.begin_date}
			          type="text"
			          className="form-control text-center"
			          id="begin_date"
			          onChange={this.handleChange}
			          required
			        />
			        <br />
			        <h4>
			          <strong>Until: (YYYYMMDD)</strong>
			        </h4>
			        <input
			          value={this.state.end_date}
			          type="text"
			          className="form-control text-center"
			          id="end_date"
			          onChange={this.handleChange}
			          required
			        />
			        <br />
			        <button
			          className="btn btn-primary"
			          type="submit"
			        >
			          Submit
			        </button>
			      </div>
			    </form>
			  </div>
			</div>
		);
	}
});

module.exports = Search;