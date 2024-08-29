import { ClientResponseError } from 'pocketbase';
import type { Actions } from './$types';
import { pb } from '$lib/service/pocketbase/pocketbase';

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
