import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/[lang=lang]/search/$types';
import type { Product } from '../../../types/medusa';

export const load: PageServerLoad = async (): Promise<{
	products: Product[] | undefined;
}> => {
	const products = (await medusa.getProducts()) as Product[];

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
