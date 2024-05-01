import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
import type { AddressInfos, CustomerInfos } from '../../../../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals, cookies }): Promise<{ addresses: AddressInfos[] }> {
	const customer: CustomerInfos = await medusa.getCustomer(locals, cookies);
	const addresses: AddressInfos[] = customer.shipping_addresses as AddressInfos[];

	return {
		addresses
	};
};

export const actions: Actions = {
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
