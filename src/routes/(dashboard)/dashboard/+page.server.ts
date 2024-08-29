import { ClientResponseError } from 'pocketbase';
import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/service/pocketbase/pocketbase';
import type { User } from '$lib/model/user';

export const load: PageServerLoad = ({ params }) => {
	const user = pb.authStore.model as User;
	return {
		user: user
	};
};

export const actions: Actions = {
	logout: async ({ request }) => {
		try {
			pb.authStore.clear();
			return { success: true };
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
