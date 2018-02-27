import * as UserController from 'controllers/user';
import * as UserValidate from 'validate/user';

export default function() {
	return [
		{
			method: 'POST',
			path: '/user',
			options: {
				handler: UserController.create,
				validate: UserValidate.create,
			},
		},
		{
			method: 'GET',
			path: '/user',
			options: {
			    handler: UserController.list,
			}
		},
	];
}