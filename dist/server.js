'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = require('routes');

var options = {
	port: 8080
};

var server = new _hapi2.default.server(options);

server.start();

server.events.on('start', function (route) {
	console.log('Server started');
	console.log(server.info.uri);
});

server.events.on('route', function (route) {
	console.log('New route added: ' + route.path);
});

for (var route in routes) {
	console.log(routes[route].default());
	server.route(routes[route].default());
}