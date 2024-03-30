import medusa from '$lib/server/medusa';
import type { Cart, CustomerInfos, Order, Product } from '../types/medusa';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({
	locals,
	cookies
}): Promise<{ locale: string; user: CustomerInfos | undefined; products: Product[] }> => {
	let user: CustomerInfos | undefined;
	const userData = await medusa.getCustomer(locals, cookies);
	if (userData) {
		const orders: Awaited<Order>[] = await Promise.all(
			userData.orders.map((order: Order) => medusa.getOrder(locals, order.id))
		);
		const cart: Awaited<Cart> = await medusa.getCart(locals, cookies);
		user = { ...userData, orders: orders, cart: cart };
	} else {
		user = undefined;
	}
	const locale = locals.locale;
	const products = (await medusa.getProducts()) as Product[];

	return { locale, user, products };
};
