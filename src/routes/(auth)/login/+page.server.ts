import type { UserLogin } from '$lib/model/user';
import { login } from '$lib/service/user/user_service';
import { ClientResponseError } from 'pocketbase';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const data = Object.fromEntries(formData);

		const userLogin = data as UserLogin;

		try {
			const auth = await login(userLogin);
			return { success: true, auth: auth };
		} catch (err) {
			if (err instanceof ClientResponseError) {
				return { success: false, error: err.message };
			} else {
				console.log(err);
				return { success: false, error: 'unknown error, check console' };
			}
		}
	}
};
