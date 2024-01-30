import medusa from '$lib/server/medusa';
import type { Product } from '../../types/product';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function (): Promise<{ products: Product[] }> {
	const products: Product[] = (await medusa.getProducts()) as Product[];

	return {
		products
	};
};
