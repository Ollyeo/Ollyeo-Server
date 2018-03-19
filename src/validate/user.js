import Joi from "joi";

module.exports = {
	create: create()
};

function create() {
	return {
		payload: {
			email: Joi.string().required(),
			password: Joi.string().required(),
		}
	};
}
