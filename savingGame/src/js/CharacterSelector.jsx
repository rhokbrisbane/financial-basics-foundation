var React = require("react");

var CharacterSelector = React.createClass({
    characters: [
        {
            cash: 0,
            happiness: 0,

            income: 1200,
            expenses: 400
        }
    ],

    selectCharacter: function (character) {
        this.props.setCharacter(character);
    },

    renderCharacter: function (character) {
        return (
            <div className="panel panel-default" onClick={this.selectCharacter.bind(this, character)}>
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
        );
    },

    render: function () {
        <div>
            {this.state.characters.map(this.renderCharacter)}
        </div>
    }
});

module.exports = CharacterSelector;
