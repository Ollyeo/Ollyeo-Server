
export default class LoginController {
	static login(request, h) {
		// TODO: Implement
		const id = 'test';
		const pw = 'test';
		
		const rId = request.payload.id;
		const rPw = request.payload.password;
		
		const res = (id === rId) && (pw === rPw);
		
		return { 
			ok: res,
		};
	}
}