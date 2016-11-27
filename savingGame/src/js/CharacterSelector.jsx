var React = require("react");

var CharacterSelector = React.createClass({
    characters: [
        {name: "Someone", cash: 0, happiness: 0, happinessDecay: 10, income: 900, expenses: 400},
        {name: "Someone Else", cash: 0, happiness: 0, happinessDecay: 5, income: 700, expenses: 250}
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
                        <div>Income: ${character.income}</div>
                        <div>Expenses: ${character.expenses}</div>
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
