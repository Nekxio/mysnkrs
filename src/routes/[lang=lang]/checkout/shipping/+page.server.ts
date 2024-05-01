import medusa from '$lib/server/medusa';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from '../../../../../.svelte-kit/types/src/routes/[lang=lang]/checkout/addresses/$types';
import type { ShippingOption } from '../../../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }): Promise<{ shippingOptions: ShippingOption[] }> => {
	const shippingOptions: ShippingOption[] = (await medusa.getShippingOptions(locals)) as ShippingOption[];

	return {
		shippingOptions
	};
};

export const actions: Actions = {
	updateCartShippingOption: async ({ request, locals }) => {
		const formData = await request.formData();
		try {
			const shippingOption: ShippingOption['id'] = String(formData.get('shippingOption'));

			await medusa.selectShippingOption(locals, shippingOption);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to update shipping address');
		}
	},
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
