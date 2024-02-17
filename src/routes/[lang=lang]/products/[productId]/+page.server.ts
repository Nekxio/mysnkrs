import medusa from '$lib/server/medusa';
import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/[lang=lang]/$types';
import type { Product } from '../../../../types/product';

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
