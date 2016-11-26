var React = require("react");

var IncomeSheet = React.createClass({
	getInitialState: function (char) {
		return {
			cash0: char.cash,
			happy0: char.happiness,

		}

	}

	render: function (char) {


		return (
		<div class="row">
			<div class="col-xs-12">
				<h1>Income and Expenses</h1>
			</div>
		</div>
		<div class=row">
			{this.makeIncome(char)}
		</div>
	)}

	makeIncome: function (char) {
		return (
			$.each(, function (key, val) {
				

			})
		)

	}

};)