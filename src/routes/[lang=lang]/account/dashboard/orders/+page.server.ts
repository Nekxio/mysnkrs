import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
import type { Order } from '../../../../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals, cookies }): Promise<{ orders: Order[] }> {
	const customerOrders: Order[] = await medusa.getCustomer(locals, cookies).then((customer) => {
		return customer.orders;
	});

	const orders: Awaited<Order>[] = await Promise.all(customerOrders.map((order) => medusa.getOrder(locals, order.id)));
	return {
		orders
	};
};

export const actions: Actions = {
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
