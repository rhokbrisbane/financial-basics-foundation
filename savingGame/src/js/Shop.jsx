var React = require("react");

var Item = React.createClass({
    render: function () {
        var {name, cost, happiness, max} = this.props;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {name}
                    </h3>
                </div>
                <div className="panel-body">
                    <div>Cost: ${cost}</div>
                    <div>Happiness: {happiness >= 0 ? "+" : "-"}{happiness}</div>
                    <div className="form-group">
                        <label className="control-label col-xs-3">
                            Quantity:
                        </label>
                        <div className="col-xs-9">
                            <input type="number" min={0} max={max} className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var Shop = React.createClass({
    items: [
        {name: "Eating out", cost: 30, happiness: 5, max: 7},
        {name: "Weekend Away", cost: 600, happiness: 200, max: 1}
    ],

    renderItem: function (item) {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={item.name}>
                <Item {...item}/>
            </div>
        );
    },

    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="button" data-toggle="collapse" data-target="#shop-panel" aria-expanded={true} aria-controls="#shop-panel">
                    <h3 className="panel-title">
                        Shop
                    </h3>
                </div>
                <div id="shop-panel" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="row">
                                {this.items.map(this.renderItem)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Shop;
