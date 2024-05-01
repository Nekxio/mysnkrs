import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
import type { Product } from '../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function (): Promise<{ products: Product[] }> {
	const products: Product[] = (await medusa.getProducts()) as Product[];

	return {
		products
	};
};

export const actions: Actions = {
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
