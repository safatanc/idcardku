import { pb } from '$lib/service/pocketbase/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	if (pb.authStore.isValid && pb.authStore.isAuthRecord) {
		return {
			authenticated: true
		};
	} else {
		redirect(302, '/login');
	}
};
