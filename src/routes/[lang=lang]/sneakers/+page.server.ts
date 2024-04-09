import medusa from '$lib/server/medusa';
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
