import { base } from '$app/paths';
import medusa from '$lib/server/medusa';
import { error, redirect } from '@sveltejs/kit';
import type { Address } from 'sveltekit-medusa-client';
import type { Actions } from '../../../../../../../.svelte-kit/types/src/routes/[lang=lang]/account/dashboard/addresses/new/$types';
import type { AddressInfos, CustomerInfos } from '../../../../../../types/medusa';
import type { PageServerLoad } from './$types';

let addressId: string;

export const load: PageServerLoad = async function ({
	locals,
	cookies,
	params
}): Promise<{ address: AddressInfos | undefined }> {
	const customer: CustomerInfos = await medusa.getCustomer(locals, cookies);
	addressId = params.addressId;
	const address: AddressInfos | undefined = customer.shipping_addresses.find(
		(value) => (value as AddressInfos).id === params.addressId
	) as AddressInfos;
	return {
		address
	};
};

export const actions: Actions = {
	updateAddress: async ({ request, params, locals }) => {
		const formData = await request.formData();
		let response: Promise<Address>;

		const address: Address = {
			address_1: formData.get('address') as Address['address_1'],
			address_2: formData.get('address_complement') as Address['address_2'],
			city: formData.get('city') as Address['city'],
			company: formData.get('company') as Address['company'],
			country_code: formData.get('country') as Address['country_code'],
			phone: formData.get('phone_number') as Address['phone'],
			postal_code: formData.get('postal_code') as Address['postal_code'],
			province: formData.get('province') as Address['province'],
			first_name: formData.get('first_name') as Address['first_name'],
			last_name: formData.get('last_name') as Address['last_name']
		};

		try {
			response = await medusa.updateShippingAddress(locals, addressId, address);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to update an address');
		}
		if (await response) {
			redirect(301, `${base}/${params.lang}/account/dashboard/addresses`);
		}
	}
};
