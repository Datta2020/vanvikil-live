const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: './src/app',
    output: {
        path: path.join(__dirname, '../public/assets/'),
        publicPath: '/assets/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    loaders: [
        {
            test: /\.(jpg|jpeg|png|gif|svg|mp3|otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.js$/,
            include: path.join(__dirname, '../src'),
            loader: 'babel',
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
