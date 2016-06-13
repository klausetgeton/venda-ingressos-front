const http = require('http');
const express = require('express');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

// Create the app, setup the webpack middleware
const app = express();
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// You probably have other paths here
app.use(express.static('src'));

const server = new http.Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

server.listen(PORT);

io.on('connection', function(client){
	console.log('Usuario conectou!');

	client.emit('messages', { hello : 'its me' });

    client.on('comprou', function(data){
		console.log(data);
		client.broadcast.emit('alguem_comprou', data);
	});

});

// io.on('connection', (socket) => {
//   // <insert relevant code here>
//   console.log('Usuario conectou!');
//   socket.broadcast.emit('alguem_comprou', {nome: "Klaus Etgeton"});
// });
