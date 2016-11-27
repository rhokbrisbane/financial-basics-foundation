// jQuery
global.jQuery = require("jquery");
var $ = global.jQuery;

// Bootstrap
var bootstrap = require("bootstrap");

// React
var React = require("react");
var ReactDOM = require("react-dom");

// Local Components
var Game = require("./src/js/Game.jsx");

ReactDOM.render(<Game/>, document.getElementById("game"));
