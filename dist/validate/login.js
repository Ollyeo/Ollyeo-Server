"use strict";

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	login: login
};

var login = {
	payload: {
		email: _joi2.default.string().required(),
		password: _joi2.default.string().required()
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0ZS9sb2dpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibG9naW4iLCJwYXlsb2FkIiwiZW1haWwiLCJzdHJpbmciLCJyZXF1aXJlZCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNoQkM7QUFEZ0IsQ0FBakI7O0FBSUEsSUFBTUEsUUFBUTtBQUNiQyxVQUFTO0FBQ1JDLFNBQU8sY0FBSUMsTUFBSixHQUFhQyxRQUFiLEVBREM7QUFFUkMsWUFBVSxjQUFJRixNQUFKLEdBQWFDLFFBQWI7QUFGRjtBQURJLENBQWQiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGxvZ2luLFxufTtcblxuY29uc3QgbG9naW4gPSB7XG5cdHBheWxvYWQ6IHtcblx0XHRlbWFpbDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG5cdFx0cGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuXHR9XG59XG4iXX0=