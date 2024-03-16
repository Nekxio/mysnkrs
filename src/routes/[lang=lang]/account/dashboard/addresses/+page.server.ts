import medusa from '$lib/server/medusa';
import type { AddressInfos, CustomerInfos } from '../../../../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals, cookies }): Promise<{ addresses: AddressInfos[] }> {
	const customer: CustomerInfos = await medusa.getCustomer(locals, cookies);
	const addresses: AddressInfos[] = customer.shipping_addresses as AddressInfos[];

	return {
		addresses
	};
};
