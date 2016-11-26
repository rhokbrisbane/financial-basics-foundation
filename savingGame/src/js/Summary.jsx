var React = require("react");

var Summary = React.createClass({
    propTypes: {
        character: React.PropTypes.object.isRequired
    },

    render: function () {
        var {name, cash, happiness, income, expenses} = this.props.character;

        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="button" data-toggle="collapse" data-target="#summary-panel" aria-expanded={true} aria-controls="#summary-panel">
                    <h3 className="panel-title">
                        Summary
                    </h3>
                </div>
                <div id="summary-panel" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <div>Name: {name}</div>
                        <div>Cash: ${cash}</div>
                        <div>Happiness: {happiness >= 0 ? "+" : "-"}{happiness}</div>
                        <div>Income: ${income}</div>
                        <div>Expenses: ${expenses}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Summary;
