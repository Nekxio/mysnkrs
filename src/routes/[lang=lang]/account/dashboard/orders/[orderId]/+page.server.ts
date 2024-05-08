import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
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

export const actions: Actions = {
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
