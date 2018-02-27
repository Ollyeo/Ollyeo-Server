'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return [{
		method: 'POST',
		path: '/login',
		options: {
			handler: loginController.login,
			validate: loginValidate.login
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

var loginController = _interopRequireWildcard(_login);

var _login2 = require('validate/login');

var loginValidate = _interopRequireWildcard(_login2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uanMiXSwibmFtZXMiOlsibWV0aG9kIiwicGF0aCIsIm9wdGlvbnMiLCJoYW5kbGVyIiwibG9naW5Db250cm9sbGVyIiwibG9naW4iLCJ2YWxpZGF0ZSIsImxvZ2luVmFsaWRhdGUiLCJyZXF1ZXN0IiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUdlLFlBQVc7QUFDekIsUUFBTyxDQUNOO0FBQ0NBLFVBQVEsTUFEVDtBQUVDQyxRQUFNLFFBRlA7QUFHQ0MsV0FBUztBQUNSQyxZQUFTQyxnQkFBZ0JDLEtBRGpCO0FBRVJDLGFBQVVDLGNBQWNGO0FBRmhCO0FBSFYsRUFETSxFQVNOO0FBQ0NMLFVBQVEsS0FEVDtBQUVDQyxRQUFNLE9BRlA7QUFHQ0UsV0FBUyxpQkFBQ0ssT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQ3pCLFVBQU8sY0FBUDtBQUNDO0FBTEYsRUFUTSxDQUFQO0FBaUJBLEM7O0FBckJEOztJQUFZTCxlOztBQUNaOztJQUFZRyxhIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9naW5Db250cm9sbGVyIGZyb20gJ2NvbnRyb2xsZXJzL2xvZ2luJztcbmltcG9ydCAqIGFzIGxvZ2luVmFsaWRhdGUgZnJvbSAndmFsaWRhdGUvbG9naW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdHBhdGg6ICcvbG9naW4nLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRoYW5kbGVyOiBsb2dpbkNvbnRyb2xsZXIubG9naW4sXG5cdFx0XHRcdHZhbGlkYXRlOiBsb2dpblZhbGlkYXRlLmxvZ2luLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRwYXRoOiAnL3Rlc3QnLFxuXHRcdFx0aGFuZGxlcjogKHJlcXVlc3QsIGgpID0+IHtcblx0XHRcdHJldHVybiAnSGVsbG8sIFdvcmxkJztcblx0XHRcdH0sXG5cdFx0fSxcblx0XTtcbn0iXX0=