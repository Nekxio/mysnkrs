import medusa from '$lib/server/medusa';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/[lang=lang]/$types';
import type { Product } from '../../../../types/medusa';

export const load: PageServerLoad = async ({
	url,
	params
}): Promise<{ product: Product | undefined; popularProducts: Product[] }> => {
	const productId: string | undefined = url.pathname.split(`/${params.lang}/products/`).pop() || '';
	const product: Product | undefined = (await medusa.getProduct(productId)) as Product;
	const popularProducts: Product[] = (await medusa.getProducts()) as Product[];

	return {
		product,
		popularProducts
	};
};

export const actions: Actions = {
	addToCart: async ({ request, locals, cookies }) => {
		const formData = await request.formData();
		const productId: string = formData.get('variantSelection') as string;
		try {
			await medusa.addToCart(locals, cookies, productId, 1);
		} catch (e) {
			console.error(e);
			throw error(501, 'Failed to update profile');
		}
	},
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
