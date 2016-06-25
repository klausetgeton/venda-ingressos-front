const http = require('http');
const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 8080;
const fetch = require('node-fetch');

// Create the app, setup the webpack middleware
const app = express();
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Serve content from 'src' folder
app.use(express.static('src'));


var EventoPossibilidades = require("./ServerJS/EventoPossibilidades.js");
const SocketAction = require("./ServerJS/SocketAction.js");
var POSSIBILIDADES = require("./possibilidades.js");



//////////////////////////////////////////////////////
// Enable HTTP server with Socket.IO support
//////////////////////////////////////////////////////
const server = new http.Server(app);
const socketIO = require('socket.io')(server);
////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////
app.get('/api/possibilidades', (request, response) => {
    try {
        response.status(200).json(POSSIBILIDADES);
    } catch (e) {
        response.sendStatus(401);
    }
});

// https://www.npmjs.com/package/node-fetch
// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
// http://webapplog.com/url-parameters-and-routing-in-express-js/
// // console.log(request.headers);
app.get('/api/possibilidades/:eventoId', (request, response) => {

    const eventoId = request.params.eventoId;

    try {
        const possibilidades = EventoPossibilidades.getPossibilidadesEvento(eventoId);

        if(possibilidades) {
            console.log('Retornando do objeto');
            response.status(200).json(possibilidades);
        } else {
            console.log('Requisitando laravel');

            fetch('http://ingressos.dev/api/pp/json/' + eventoId)
            .then((res) => res.json())
            .then((data) => {
                EventoPossibilidades.salvarPossibilidades(eventoId, data);
                response.status(200).json(data);
            });

        }
    } catch (e) {
        response.sendStatus(401);
    }
});


app.post('/api/comprar-acentos', (request, response) => {

    try {

        const fetchConfig = {
                                headers: { 'Authorization': request.headers.authorization,
                                           'Content-Type':'application/json' },
                                method: 'POST',
                                body: JSON.stringify({
                                    usuario: request.body.usuario,
                                    acentos: request.body.acentos
                                })
                            };

        fetch('http://ingressos.dev/api/tickets/store', fetchConfig)
        .then(response => response.json())
        .then(retorno => {
            console.log('RETORNO DA COMPRA', retorno);
            response.status(200).json(retorno);
        });
        
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




// Socket actions
socketIO.on('connection', function(client) {
	console.log('Usuario conectou!');

	client.emit('messages', { hello : 'its me' });

    client.on('comprou', function(dadosCompra) {

        EventoPossibilidades.setNovoStatusPossibilidade(dadosCompra);
        // SocketAction.setNovoStatusPossibilidade(POSSIBILIDADES, dadosCompra);
        console.log(POSSIBILIDADES, dadosCompra);
		client.broadcast.emit('alguem_comprou', dadosCompra);

	});
});
