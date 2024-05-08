import { base } from '$app/paths';
import medusa from '$lib/server/medusa';
import { error, redirect } from '@sveltejs/kit';
import type { Address } from 'sveltekit-medusa-client';
import type { Actions } from './$types';

export const actions: Actions = {
	newAddress: async ({ request, params, locals }) => {
		const formData = await request.formData();
		let response: Promise<Address>;

		const address: Address = {
			address_1: formData.get('address_1') as Address['address_1'],
			address_2: formData.get('address_2') as Address['address_2'],
			city: formData.get('city') as Address['city'],
			company: formData.get('company') as Address['company'],
			country_code: formData.get('country_code') as Address['country_code'],
			phone: formData.get('phone') as string,
			postal_code: formData.get('postal_code') as Address['postal_code'],
			province: formData.get('province') as Address['province'],
			first_name: formData.get('first_name') as Address['first_name'],
			last_name: formData.get('last_name') as Address['last_name']
		};

		try {
			response = await medusa.addShippingAddress(locals, address);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to create an address');
		}
		if (await response) {
			redirect(301, `${base}/${params.lang}/account/dashboard/addresses`);
		}
	},
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
