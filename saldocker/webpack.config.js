var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './',
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal'
    },
    debug: true,
    devtool: 'inline-sourcemap',
    entry: './src/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        devtoolLineToLine: true,
        sourceMapFilename: "./bundle.js.map",
        pathinfo: true,
        filename: 'build/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
