import medusa from '$lib/server/medusa';
import type { Order, ShippingMethod } from '../../../../../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({
	locals,
	params
}): Promise<{ order: Order; shippingOptions: ShippingMethod }> {
	const order = await medusa.getOrder(locals, params.orderId);
	const shippingOptions = await medusa.getShippingOptions(locals);
	return {
		order,
		shippingOptions
	};
};
