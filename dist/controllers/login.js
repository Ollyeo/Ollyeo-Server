'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginController = function () {
	function LoginController() {
		_classCallCheck(this, LoginController);
	}

	_createClass(LoginController, null, [{
		key: 'login',
		value: function login(request, h) {
			// TODO: Implement
			var id = 'test';
			var pw = 'test';

			var rId = request.payload.id;
			var rPw = request.payload.password;

			var res = id === rId && pw === rPw;

			return {
				ok: res
			};
		}
	}]);

	return LoginController;
}();

exports.default = LoginController;