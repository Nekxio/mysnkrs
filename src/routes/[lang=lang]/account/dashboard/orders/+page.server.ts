import medusa from '$lib/server/medusa';
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
