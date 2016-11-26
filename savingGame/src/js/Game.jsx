var React = require("react");
var CharacterSelector = require("./CharacterSelector.jsx");
var OpportunityCard = require("./OpportunityCard.jsx");
var RandomEventCard = require("./RandomEventCard.jsx");

var Game = React.createClass({
    getInitialState: function () {
        return {
            character: null,
            turn: 0,
            stage: "summary"
        };
    },

    setCharacter: function (character) {
        this.setState({character: character});
    },

    render: function () {
        var {character, turn, stage} = this.state;

        var component;
        if (!character) {
            component = (
                <div className="col-xs-12 col-sm-4 col-md-3">
                    <CharacterSelector setCharacter={this.setCharacter}/>
                </div>
            );
        } else {
            switch (stage) {
            case "summary":
                
                break;
            case "allocation":
                
                break;
            case "event":
                if (Math.random() > 0.7) {
                    component = <RandomEventCard/>
                } else {
                    component = <OpportunityCard/>
                }
                break;
            }
        }

        return (
            <div className="row">
                {component}
            </div>
        );
    }
});

module.exports = Game;
