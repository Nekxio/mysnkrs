import medusa from '$lib/server/medusa';
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
