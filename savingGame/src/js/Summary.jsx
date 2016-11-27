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
            <div className="panel panel-primary">
                <div className="panel-heading" role="button" data-toggle="collapse" data-target="#summary-panel" aria-expanded={true} aria-controls="#summary-panel">
                    <h3 className="text center panel-title">
                        Week: {this.props.turn}
                    </h3>
                </div>
                <div id="summary-panel" className="text-center panel-collapse collapse in">
                    <div className="panel-body" style={{fontSize: 20}}>
                        <div style={{fontWeight: 700, fontSize: 24}}>{name}</div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div>
                                    <i className="fa fa-money" aria-hidden="true"/>
                                    Cash: ${helpers.printNumber(Math.round(cash * 100) / 100)}
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div>
                                    <i className="fa fa-arrow-smile-o" aria-hidden="true"/>
                                    Happiness: {happiness >= 0 ? "+" : ""}{helpers.printNumber(happiness)}
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div>
                                    <i className="fa fa-arrow-up" aria-hidden="true"/>
                                    Income: ${helpers.printNumber(income)}
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div>
                                    <i className="fa fa-arrow-down" aria-hidden="true"/>
                                    Expenses: ${helpers.printNumber(expenses)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Summary;
