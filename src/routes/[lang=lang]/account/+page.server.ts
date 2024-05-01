import { base } from '$app/paths';
import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals, cookies }) => {
	const isLogin = await medusa.getCustomer(locals, cookies);
	if (isLogin) {
		redirect(303, `${base}/${params.lang}/account/dashboard`);
	} else {
		redirect(302, `${base}/${params.lang}/account/auth`);
	}
};

export const actions: Actions = {
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
