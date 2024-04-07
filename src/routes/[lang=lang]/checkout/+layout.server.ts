import medusa from '$lib/server/medusa';
import type { Cart } from '../../../types/medusa';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, cookies }): Promise<{ medusaCart: Cart }> => {
	const medusaCart: Cart = await medusa.getCart(locals, cookies);
	return {
		medusaCart
	};
};
