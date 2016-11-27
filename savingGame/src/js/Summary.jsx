var React = require("react");
var helpers = require("./helpers.js");

var Summary = React.createClass({
    propTypes: {
        turn: React.PropTypes.number.isRequired,
        character: React.PropTypes.object.isRequired
    },

    render: function () {
        var {name, cash, happiness, income, expenses} = this.props.character;

        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="button" data-toggle="collapse" data-target="#summary-panel" aria-expanded={true} aria-controls="#summary-panel" style={{display: "flex", justifyContent: "space-between"}}>
                    <h3 className="panel-title">
                        Summary
                    </h3>
                    <h3 className="panel-title">
                        Week: {this.props.turn}
                    </h3>
                </div>
                <div id="summary-panel" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <div>Name: {name}</div>
                        <div>Cash: ${helpers.printNumber(Math.round(cash * 100) / 100)}</div>
                        <div>Happiness: {happiness >= 0 ? "+" : ""}{helpers.printNumber(happiness)}</div>
                        <div>Income: ${helpers.printNumber(income)}</div>
                        <div>Expenses: ${helpers.printNumber(expenses)}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Summary;
