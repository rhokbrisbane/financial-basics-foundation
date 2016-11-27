var React = require("react");
var helpers = require("./helpers.js");

var OpportunityCard = React.createClass({
    getInitialState: function () {
        return {
            takeIt: false
        };
    },

    takeIt: function () {
        if (!this.state.takeIt) return;

        var {cash, happiness, takeIt} = this.props;

        takeIt(-cash, happiness);

        this.setState(this.getInitialState());
    },

    onChange: function () {
        this.setState({takeIt: !this.state.takeIt});
    },

    render: function () {
        var {name, description, cash, happiness} = this.props;

        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Opportunity: {name}
                    </h3>
                </div>
                <div className="panel-body">
                    <div>{description}</div>
                    <div>Cash: ${helpers.printNumber(cash)}</div>
                    <div>Happiness: {helpers.printNumber(happiness)}</div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" checked={this.state.takeIt} onChange={this.onChange}/>
                            Take It!
                        </label>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = OpportunityCard;
