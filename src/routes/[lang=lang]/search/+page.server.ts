import medusa from '$lib/server/medusa';
import { redirect, type Actions } from '@sveltejs/kit';
import type { Product } from '../../../types/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({
	url
}): Promise<{ searchResults: Product[] | undefined; query: string | null }> {
	const query = url.searchParams?.get('query');
	const products = query ? ((await medusa.getProducts()) as Product[]) : null;
	const searchResults = products?.filter((product) => {
		if (query) {
			const words = product.title.toLowerCase().split(' ');
			return words.some((word) => word.includes(query.toLowerCase()));
		}
		return null;
	});

	return {
		searchResults,
		query
	};
};

export const actions: Actions = {
	search: async ({ url, request, locals }) => {
		const formData = await request.formData();
		const query = formData.get('query');

		redirect(303, `${url.origin}/${locals.locale}/search?query=${query}`);
	}
};
