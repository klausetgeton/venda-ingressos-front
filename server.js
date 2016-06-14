const http = require('http');
const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 8080;

// Create the app, setup the webpack middleware
const app = express();
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
// Serve content from 'src' folder
app.use(express.static('src'));

//////////////////////////////////////////////////////
// Enable HTTP server with Socket.IO support
//////////////////////////////////////////////////////
const server = new http.Server(app);
const socketIO = require('socket.io')(server);
////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////
var POSSIBILIDADES = require("./possibilidades.js");
app.get('/api/possibilidades', (request, response) => {
    try {
        response.status(200).json(POSSIBILIDADES);
    } catch (e) {
        response.sendStatus(401);
    }
});










//////////////////////////////////////////////////////
// Enable listeners on a specific port
server.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎 Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
    }
});

const SocketAction = require("./Socket/SocketAction.js");


// Socket actions
socketIO.on('connection', function(client) {
	console.log('Usuario conectou!');

	client.emit('messages', { hello : 'its me' });

    client.on('comprou', function(dadosCompra) {
        SocketAction.setNovoStatusPossibilidade(POSSIBILIDADES, dadosCompra);
        console.log(POSSIBILIDADES, dadosCompra);
		client.broadcast.emit('alguem_comprou', dadosCompra);
	});
});
