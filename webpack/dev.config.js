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
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            entry
        ]
    },
    output,
    module: {
        loaders
    },
    resolve,
    plugins: plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ])
};
