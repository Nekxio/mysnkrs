import medusa from '$lib/server/medusa';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	updateItemQuantity: async ({ request, locals }) => {
		const formData = await request.formData();

		const itemId: string = String(formData.get('itemId'));
		const quantity: number = Number(formData.get('itemQuantity'));

		try {
			await medusa.updateCart(locals, itemId, quantity);
		} catch (e) {
			console.error(e);
			throw fail(501, { description: 'Failed to update cart item quantity', error: e });
		}
	}
};
