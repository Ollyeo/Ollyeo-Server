import loginController from 'controllers/login';
import loginValidate from 'validate/login';

export default function() {
	return [
		{
			method: 'POST',
			path: '/login',
			options: {
				handler: loginController.login,
				validate: loginValidate.login(),
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