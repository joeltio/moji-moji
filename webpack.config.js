var debug = process.env.NODE_ENV != "production";
const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: __dirname,
    devtool: debug? "inline-sourcemap" : false,
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        filename: "client.min.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["react", "env"],
                    plugins: [
                        "react-html-attrs",
                        ["react-css-modules", {"filetypes": {".scss": {"syntax": "postcss-scss"}}}]
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                },
            },
        ]
    },

    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, soucemap: false })
    ]
};
