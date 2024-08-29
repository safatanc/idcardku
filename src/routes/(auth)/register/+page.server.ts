import type { UserCreate } from '$lib/model/user';
import { register } from '$lib/service/user/user_service';
import { ClientResponseError } from 'pocketbase';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const data = Object.fromEntries(formData);

		const userCreate = data as UserCreate;
		try {
			const user = await register(userCreate);
			return { success: true, user: user };
		} catch (err) {
			if (err instanceof ClientResponseError) {
				return { success: false, error: err.message, detail: err.data };
			} else {
				console.log(err);
				return { success: false, error: 'unknown error, check console' };
			}
		}
	}
};
