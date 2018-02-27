import * as loginController from 'controllers/login';
import * as loginValidate from 'validate/login';

export default function() {
	return [
		{
			method: 'POST',
			path: '/login',
			options: {
				handler: loginController.login,
				validate: loginValidate.login,
			},
		},
		{
			method: 'GET',
			path: '/test',
			handler: (request, h) => {
			return 'Hello, World';
			},
		},
	];
}