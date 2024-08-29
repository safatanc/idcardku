import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { pb } from '$lib/service/pocketbase/pocketbase';

export const load: LayoutServerLoad = async () => {
	if (pb.authStore.isValid && pb.authStore.isAuthRecord) {
		redirect(302, '/dashboard');
	} else {
		return {
			authenticated: false
		};
	}
};
