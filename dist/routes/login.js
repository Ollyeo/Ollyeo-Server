'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return [{
		method: 'POST',
		path: '/login',
		options: {
			handler: _login2.default.login,
			validate: _login4.default.login()
		}
	}, {
		method: 'GET',
		path: '/test',
		handler: function handler(request, h) {
			return 'Hello, World';
		}
	}];
};

var _login = require('controllers/login');

var _login2 = _interopRequireDefault(_login);

var _login3 = require('validate/login');

var _login4 = _interopRequireDefault(_login3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }