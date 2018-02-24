"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginValidate = function () {
	function LoginValidate() {
		_classCallCheck(this, LoginValidate);
	}

	_createClass(LoginValidate, null, [{
		key: "login",
		value: function login() {
			// TODO: Implement
			return {
				payload: {
					id: _joi2.default.string().required(),
					password: _joi2.default.string().required()
				},
				failAction: {
					log: "hello this is error"
				}
			};
		}
	}]);

	return LoginValidate;
}();

exports.default = LoginValidate;