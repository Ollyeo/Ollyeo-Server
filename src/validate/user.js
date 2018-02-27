import Joi from "joi";

module.exports = {
	create,
};

const create = {
	payload: {
		email: Joi.string().required(),
		password: Joi.string().required(),
	}
}
