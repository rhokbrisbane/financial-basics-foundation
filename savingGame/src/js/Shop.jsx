var $ = require("jquery");
var React = require("react");

var Item = React.createClass({
    onChange: function (e) {
        this.props.onChange(this.props.name, $(e.target).val());
    },

    render: function () {
        var {name, cost, happiness, max, amount} = this.props;

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
                        <label className="control-label col-xs-12 col-sm-3">
                            Quantity:
                        </label>
                        <div className="col-xs-12 col-sm-9">
                            <input type="number" min={0} max={max} value={amount} onChange={this.onChange} className="form-control"/>
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
        {name: "Weekend Away", cost: 800, happiness: 200, max: 1}
    ],

    getInitialState: function () {
        var items = this.items.map(function (item) {
            return {
                name: item.name,
                cost: item.cost,
                happiness: item.happiness,
                max: item.max,
                amount: 0
            };
        });

        return {
            items: items
        };
    },

    onChange: function (itemName, amount) {
        var {items} = this.state;

        var item = null;
        for (let i = 0; i < items.length && !item; i++) {
            if (items[i].name == itemName) {
                item = items[i];
            }
        }

        item.amount = amount;

        this.forceUpdate();
    },

    submit: function (e) {
        e.preventDefault();
    },

    checkout: function () {
        var cost = 0;
        var happiness = 0;

        $.each(this.state.items, function (i, item) {
            cost += item.cost * item.amount;
            happiness += item.happiness * item.amount;
        });

        this.props.makePurchase(cost, happiness);

        this.reset();
    },

    reset: function () {
        this.setState(this.getInitialState());
    },

    renderItem: function (item) {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={item.name}>
                <Item {...item} onChange={this.onChange}/>
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
                        <form className="form-horizontal" onSubmit={this.submit}>
                            <div className="row">
                                {this.state.items.map(this.renderItem)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Shop;
