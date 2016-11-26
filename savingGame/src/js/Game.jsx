var React = require("react");
var CharacterSelector = require("./CharacterSelector.jsx");

var Game = React.createClass({
    getInitialState: function () {
        return {
            character: null,
            week: 0
        };
    },

    setCharacter: function (character) {
        this.setState({character: character});
    },

    render: function () {
        var component;

        if (!character) {
            component = (
                <CharacterSelector setCharacter={this.setCharacter}/>
            );
        } else {
            
        }

        return (
            <div>
                {component}
            </div>
        );
    }
});

module.exports = Game;
