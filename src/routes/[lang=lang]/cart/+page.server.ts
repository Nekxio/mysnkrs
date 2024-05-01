import medusa from '$lib/server/medusa';
import { fail, redirect, type Actions } from '@sveltejs/kit';

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
	},
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
