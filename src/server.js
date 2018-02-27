import 'source-map-support/register';

import Hapi from 'hapi';
import Mongoose from 'mongoose';
const routes = require('routes');

const options = {
	port: 8080,
};
    
Mongoose.connect('mongodb://localhost:27017/test');

const server = new Hapi.server(options);
server.start();

server.events.on('start', (route) => {
	console.log('Server started');
	console.log(server.info.uri);
});

server.events.on('route', (route) => {
	console.log(`New route added: ${route.path}`);
});


for (const route in routes) {
	server.route(routes[route].default());
}