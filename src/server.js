import Hapi from 'hapi';

const routes = require('routes');

const options = {
	port: 8080,
};

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
	console.log(routes[route].default())
	server.route(routes[route].default());
}