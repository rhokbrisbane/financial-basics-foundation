var webpack = require("webpack");
var path = require("path");

var OUT_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src/js");

module.exports = {
    entry: "./index.js",
    output: {
        path: OUT_DIR,
        filename: "savingGame.js"
    },
    module: {
        loaders: [
            {
                test: /index\.js$/,
                include: __dirname,
                loader: "babel"
            },
            {
                test: /\.jsx$/,
                include: SRC_DIR,
                loader: "babel"
            }
        ]
    }
}
