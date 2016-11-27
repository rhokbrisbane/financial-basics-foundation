var React = require("react");
var helpers = require("./helpers.js");

var CharacterSelector = React.createClass({
    characters: [
        {name: "Reggie McRib", cash: 0, happiness: 0, happinessDecay: 10, income: 900, expenses: 400, minimumHappiness: -50, goal: "Car", img: "reggie.jpeg"},
        {name: "Sammie Sandwich", cash: 0, happiness: 0, happinessDecay: 5, income: 700, expenses: 250, minimumHappiness: -100, goal: "Car", img: "sammie.jpeg"},
        //{name: "Tony Stark", cash: 0, happiness: 0, happinessDecay: 5, income: 10000, expenses: 9200, minimumHappiness: -10, goal: "Awesome Car", img: "tony.jpeg"},
        {name: "Party Dude", cash: 0, happiness: 0, happinessDecay: 10, income: 1000, expenses: 300, minimumHappiness: -30, goal: "Weekend Away", img: "party.jpeg"}
    ],

    selectCharacter: function (character, e) {
        this.props.setCharacter(character);
    },

    renderCharacter: function (character) {
        return (
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                <div className="panel panel-default character-option" onClick={this.selectCharacter.bind(this, character)} key={character.name}>
                    <div className="panel-heading">
						<img src={character.img}/>
                        <h3 className="panel-title">
                            {character.name}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div><i className="fa fa-long-arrow-up" />Income: ${helpers.printNumber(character.income)}</div>
                        <div><i className="fa fa-long-arrow-down" />Expenses: ${helpers.printNumber(character.expenses)}</div>
                        <div><i className="fa fa-trophy" />Goal: {character.goal}</div>
						<button className="btn btn-primary btn-block active">Select</button>
                    </div>
                </div>
            </div>
        );
    },

    render: function () {
        return (
            <div className="row character-selector">
                {this.characters.map(this.renderCharacter)}
            </div>
        );
    }
});

module.exports = CharacterSelector;
