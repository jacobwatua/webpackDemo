const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { webpack } = require("webpack");


module.exports = {
    entry : path.join(__dirname, "src/public/js/index.js"),
    mode : "development",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname, "dist")
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"],
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin(
            {
                template : path.join(__dirname, "src/public/views/index.html")
            }
        ),
        new CleanWebpackPlugin ({
            verbose : true,
            dry: true,
            cleanStaleWebpackAssets : true,
            protectWebpackAssets: false,
        })
    ],
}

