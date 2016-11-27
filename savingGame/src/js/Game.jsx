var React = require("react");
var CharacterSelector = require("./CharacterSelector.jsx");
var Summary = require("./Summary.jsx");
var Shop = require("./Shop.jsx");
var OpportunityCard = require("./OpportunityCard.jsx");
var RandomEventCard = require("./RandomEventCard.jsx");

var Game = React.createClass({
    interest: {
        cash: 0.00075,
        credit: 0.035
    },

    opportunities: [
        {
            name: "Weekend Work",
            description: "Do extra work for the weekend",
            cash: 500,
            happiness: -80
        },
        {
            name: "RHoK",
            description: "Random Hacks of Kindness",
            cash: 0,
            happiness: 1000
        },
    ],

    getInitialState: function () {
        return {
            character: null,
            turn: 0,
            opportunity: null,
            boughtGoal: false
        };
    },

    setCharacter: function (character) {
        character.cash = character.income - character.expenses;

        this.setState({character: character});
    },

    adjust: function (cost, happiness) {
        var {character} = this.state;

        character.cash -= cost;
        character.happiness += happiness;

        this.forceUpdate();
    },

    boughtGoal: function () {
        this.setState({boughtGoal: true});
    },

    nextTurn: function () {
        var {character} = this.state;

        this.shop.checkout();
        if (this.opportunity) {
            this.opportunity.takeIt();
        }

        character.cash -= character.expenses;

        if (character.cash < 0) {
            character.cash *= 1 + this.interest.credit;
        } else {
            character.cash *= 1 + this.interest.cash;
        }

        character.cash += character.income;
        character.happiness -= character.happinessDecay;

        var opportunity = null;
        if (Math.random() > 0.7) {
            //component = <RandomEventCard/>
        } else {
            var opportunityIndex = Math.floor(Math.random() * this.opportunities.length);
            opportunity = this.opportunities[opportunityIndex]
        }

        this.setState({
            turn: this.state.turn + 1,
            opportunity: opportunity
        });
    },

    render: function () {
        var {character, turn, opportunity, boughtGoal} = this.state;

        var component;
        if (!character) {
            component = <CharacterSelector setCharacter={this.setCharacter}/>;
        } else if (-character.cash * this.interest.credit >= (character.income - character.expenses)) {
            component = (
                <div className="row">
                    <div className="col-xs-12" className="text-center">
                        <h1>
                            You Lose
                        </h1>
                        <p>
                            You are being crushed under enormous amounts of debt
                        </p>
                        <a className="btn btn-danger active" href="index.html">
                            Restart
                        </a>
                    </div>

                </div>
            );
        } else if (character.happiness <= character.minimumHappiness) {
            component = (
                <div className="row">
                    <div className="col-xs-12" className="text-center">
                        <h1>
                            You Lose
                        </h1>
                        <p>
                            You are very unhappy
                        </p>
                        <a className="btn btn-danger active" href="index.html">
                            Restart
                        </a>
                    </div>
                </div>
            );
        } else if (boughtGoal && character.cash > 0) {
            component = (
                <div className="row">
                    <div className="col-xs-12" className="text-center">
                        <h1>
                            You Win
                        </h1>
                        <p>
                            You acheived your goal and have no debt
                        </p>
                        <a className="btn btn-danger active" href="index.html">
                            Restart
                        </a>
                    </div>
                </div>
            );
        } else {
            component = (
                <div>
                    <div className="panel-group">
                        <Summary character={character} turn={turn}/>
                        <Shop makePurchase={this.adjust} boughtGoal={this.boughtGoal} goal={character.goal} ref={(shop) => {this.shop = shop;}}/>
                        {opportunity ? <OpportunityCard takeIt={this.adjust} ref={(opportunity) => {this.opportunity = opportunity;}} {...opportunity}/> : null}
                    </div>

                    <div className="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3 col-lg-2 col-lg-offset-6">
                        <a className="btn btn-danger btn-block active" href="index.html">
                            Retire
                        </a>
                    </div>

                    <div className="col-xs-6 col-xs-offset-1 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3 col-lg-2 col-lg-offset-2">
                        <button className="btn btn-success btn-block active" onClick={this.nextTurn}>
                            {turn ? "Next Turn" : "Start"}
                        </button>
                    </div>

                </div>
            );
        }

        return (
            <div className="row">
                <div className="col-xs-12">
                    {component}
                </div>
            </div>
        );
    }
});

module.exports = Game;
