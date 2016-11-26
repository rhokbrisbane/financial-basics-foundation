var React = require("react");
var CharacterSelector = require("./CharacterSelector.jsx");
var Summary = require("./Summary.jsx");
var Shop = require("./Shop.jsx");
var OpportunityCard = require("./OpportunityCard.jsx");
var RandomEventCard = require("./RandomEventCard.jsx");

var Game = React.createClass({
    getInitialState: function () {
        return {
            character: null,
            turn: 0
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

        character.cash -= character.expenses;
        character.cash += character.income;
        character.happiness -= character.happinessDecay;

        /*if (Math.random() > 0.7) {
            component = <RandomEventCard/>
        } else {
            component = <OpportunityCard/>
        }*/

        this.setState({turn: this.state.turn + 1});
    },

    render: function () {
        var {character, turn} = this.state;

        var component;
        if (!character) {
            component = <CharacterSelector setCharacter={this.setCharacter}/>;
        } else {
            component = (
                <div>
                    <div className="panel-group">
                        <Summary character={character} turn={turn}/>
                        <Shop makePurchase={this.adjust} ref={(shop) => {this.shop = shop;}}/>
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
