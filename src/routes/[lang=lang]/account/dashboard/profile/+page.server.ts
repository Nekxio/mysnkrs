import medusa from '$lib/server/medusa';
import { error } from '@sveltejs/kit';
import type { Customer } from 'sveltekit-medusa-client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals, cookies }): Promise<{ customer: Customer }> {
	const customer: Customer = await medusa.getCustomer(locals, cookies);

	return {
		customer
	};
};

export const actions: Actions = {
	updateProfile: async ({ request, locals }) => {
		const formData = await request.formData();
		const customer: Customer = {
			email: formData.get('email') as Customer['email'],
			phone: formData.get('phone_number') as Customer['phone'],
			first_name: formData.get('first_name') as Customer['first_name'],
			last_name: formData.get('last_name') as Customer['last_name']
		};

		try {
			await medusa.editCustomer(locals, customer);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to update profile');
		}
	}
};
