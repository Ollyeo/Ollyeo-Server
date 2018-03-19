import Joi from "joi";

module.exports = {
	login: login()
};

function login() {
	return {
		payload: {
			email: Joi.string().required(),
			password: Joi.string().required(),
		}
	};
}
