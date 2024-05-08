import { base } from '$app/paths';
import medusa from '$lib/server/medusa';
import type { CustomerDTO } from '@medusajs/types';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	signup: async ({ request, params, locals, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const first_name = formData.get('first_name') as string;
		const last_name = formData.get('last_name') as string;
		let signupData: boolean | undefined;
		try {
			signupData = await medusa.register(locals, cookies, {
				email: email,
				password: password,
				first_name: first_name,
				last_name: last_name
			});
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to register');
		}

		if (signupData) {
			redirect(303, `${base}/${params.lang}/`);
		} else {
			error(501, 'Failed to register');
		}
	},

	login: async ({ request, params, locals, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email') as CustomerDTO['email'];
		const password = formData.get('password') as string;
		let loginData: boolean | undefined;

		try {
			loginData = await medusa.login(locals, cookies, email, password);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to login');
		}

		if (loginData) {
			redirect(303, `${base}/${params.lang}/`);
		} else {
			throw error(401, 'Failed to login');
		}
	},
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
} satisfies Actions;
