var React = require("react");
var helpers = require("./helpers.js");

var CharacterSelector = React.createClass({
    characters: [
        {name: "Reggie McRib", cash: 0, happiness: 0, happinessDecay: 10, income: 900, expenses: 400, minimumHappiness: -50, goal: "Car"},
        {name: "Sammie Sandwich", cash: 0, happiness: 0, happinessDecay: 5, income: 700, expenses: 250, minimumHappiness: -100, goal: "Car"},
        {name: "Tony Stark", cash: 0, happiness: 0, happinessDecay: 5, income: 10000, expenses: 9200, minimumHappiness: -10, goal: "Awesome Car"},
        {name: "Party Dude", cash: 0, happiness: 0, happinessDecay: 10, income: 1000, expenses: 300, minimumHappiness: -30, goal: "Weekend Away"}
    ],

    selectCharacter: function (character, e) {
        this.props.setCharacter(character);
    },

    renderCharacter: function (character) {
        return (
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                <div className="panel panel-default character-option" onClick={this.selectCharacter.bind(this, character)} key={character.name}>
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {character.name}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div>Income: ${helpers.printNumber(character.income)}</div>
                        <div>Expenses: ${helpers.printNumber(character.expenses)}</div>
                        <div>Goal: {character.goal}</div>
                    </div>
                </div>
            </div>
        );
    },

    render: function () {
        return (
            <div className="character-selector">
                {this.characters.map(this.renderCharacter)}
            </div>
        );
    }
});

module.exports = CharacterSelector;
