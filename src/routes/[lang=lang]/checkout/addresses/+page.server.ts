import medusa from '$lib/server/medusa';
import { error, redirect } from '@sveltejs/kit';
import type { Address } from 'sveltekit-medusa-client';
import type { Actions } from './$types';
export const actions: Actions = {
	updateCartAddresses: async ({ request, locals }) => {
		const formData = await request.formData();
		try {
			const shippingAddress: Address = {
				address_1: formData.get('shippingAddress1') as Address['address_1'],
				address_2: formData.get('shippingAddress2') as Address['address_2'],
				city: formData.get('shippingCity') as Address['city'],
				company: formData.get('shippingCompany') as Address['company'],
				country_code: formData.get('shippingCountry') as Address['country_code'],
				phone: formData.get('shippingPhone') as string,
				postal_code: formData.get('shippingPostalCode') as Address['postal_code'],
				province: formData.get('shippingProvince') as Address['province'],
				first_name: formData.get('shippingFirstName') as Address['first_name'],
				last_name: formData.get('shippingLastName') as Address['last_name']
			};

			await medusa.updateCartShippingAddress(locals, shippingAddress);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to update shipping address');
		}
		try {
			const billingAddress: Address = {
				address_1: formData.get('billingAddress1') as Address['address_1'],
				address_2: formData.get('billingAddress2') as Address['address_2'],
				city: formData.get('billingCity') as Address['city'],
				company: formData.get('billingCompany') as Address['company'],
				country_code: formData.get('billingCountry') as Address['country_code'],
				phone: formData.get('billingPhone') as string,
				postal_code: formData.get('billingPostalCode') as Address['postal_code'],
				province: formData.get('billingProvince') as Address['province'],
				first_name: formData.get('billingFirstName') as Address['first_name'],
				last_name: formData.get('billingLastName') as Address['last_name']
			};

			await medusa.updateCartBillingAddress(locals, billingAddress);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to update cart addresses');
		}
	},
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
