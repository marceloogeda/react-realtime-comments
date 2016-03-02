'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './app/scripts/main.js', // putting array here will throw an exception
    output: {
        path: __dirname + '/app/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets:['react']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
