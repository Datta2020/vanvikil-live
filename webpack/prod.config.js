const webpack = require('webpack');
const base = require('./base.config');

const context = base.context;
const entry = base.entry;
const output = base.output;
const loaders = base.loaders;
const resolve = base.resolve;
const plugins = base.plugins;

module.exports = {
    context,
    devtool: 'source-map',
    entry: {
        app: entry
    },
    output,
    module: {
        loaders
    },
    resolve,
    plugins: plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ])
};
