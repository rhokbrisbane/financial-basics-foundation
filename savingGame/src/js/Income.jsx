var React = require("react");

var IncomeSheet = React.createClass({
	/*	Inital state - if calculations are done in this file,
		which they are currently not
	getInitialState: function (char) {
		return {
			cash0: char.cash,
			happy0: char.happiness,

		}

	}
	*/
	render: function (char) {
	//Takes .characters from character as char

		return (
		<div className="row">
			<div className="col-xs-12">
				<h1>Income and Expenses</h1>
			</div>
		</div>
		<div class=row">
			{this.makeIncome(char)}
		</div>
	)}

	makeIncome: function (char) {
		out = [],
		$.each(char, function (key, val) {
			out.push(<div className="col-xs-12">key : val</div>)				
			}),
		var deltacash = ${char.cash} + ${char.income} - ${char.expenses}
		out.push(<div className="col-xs-12"><b>New Balance: ${deltacash}</b></div>),
		return (out),

	}

};)