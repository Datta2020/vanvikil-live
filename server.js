/* eslint no-console: 0 */

const express = require('express');
const compression = require('compression');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// Express middlewares
app.use(compression());

// Express middlewares in development
if (process.env.NODE_ENV === 'development') {
    const config = require('./webpack/dev.config');
    const compiler = require('webpack')(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

// Generic server errors
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error('Error on request %s %s', req.method, req.url);
    console.error(err.stack);

    if (app.get('env') === 'development') {
        return res.status(500).send(err.stack);
    }

    return res.sendStatus(500);
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    return console.log(`Server listening on ${port}`);
});
