var React = require("react");
var CharacterSelector = require("./CharacterSelector.jsx");
var Summary = require("./Summary.jsx");
var Shop = require("./Shop.jsx");
var OpportunityCard = require("./OpportunityCard.jsx");
var RandomEventCard = require("./RandomEventCard.jsx");

var Game = React.createClass({
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
            opportunity: null
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

    nextTurn: function () {
        var {character} = this.state;

        this.shop.checkout();
        if (this.opportunity) {
            this.opportunity.takeIt();
        }

        character.cash -= character.expenses;
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
        var {character, turn, opportunity} = this.state;

        var component;
        if (!character) {
            component = <CharacterSelector setCharacter={this.setCharacter}/>;
        } else {
            component = (
                <div>
                    <div className="panel-group">
                        <Summary character={character} turn={turn}/>
                        <Shop makePurchase={this.adjust} ref={(shop) => {this.shop = shop;}}/>
                        {opportunity ? <OpportunityCard takeIt={this.adjust} ref={(opportunity) => {this.opportunity = opportunity;}} {...opportunity}/> : null}
                    </div>

                    <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-8 col-md-3 col-md-offset-9 col-lg-2 col-lg-offset-10">
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
