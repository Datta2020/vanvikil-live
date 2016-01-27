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
            test: /\.(jpe?g|png|gif|svg|eot|ttf|mp3)$/,
            loader: 'file'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        },
        {
            test: /\.js$/,
            include: path.join(__dirname, '../src'),
            loader: 'babel',
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
