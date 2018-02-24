import Joi from "joi";

export default class LoginValidate {
	static login() {
		// TODO: Implement
		return {
			payload: {
				id: Joi.string().required(),
				password: Joi.string().required(),
			},
			failAction: {
				log: "hello this is error",
			}
		};
	}
}