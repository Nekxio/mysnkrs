<script lang="ts">
	import type { Product } from '../../../types/medusa';
	import { page } from '$app/stores';
	import { productsStore } from '../../../stores/productsStore';
	import ProductCard from '$lib/components/common/ProductCard.svelte';
	import LL from '$i18n/i18n-svelte';

	let searchedProducts: Product[] = $productsStore;
	let queryParam = '';
	$: {
		queryParam = $page.url.searchParams.get('query') || '';
		if (queryParam && queryParam.length >= 3) {
			searchedProducts = $productsStore.filter((product) =>
				product.title.toLowerCase().includes(queryParam.toLowerCase())
			);
		} else {
			searchedProducts = [];
		}
	}
</script>

<section class="flex flex-col space-y-6 min-h-[60vh]">
	<h1 class="text-3xl font-bold text-center">
		{$LL.common.searchResults()} "{queryParam}" ({searchedProducts.length})
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 p-6">
		{#each searchedProducts as item}
			<ProductCard product={item} />
		{/each}
	</div>
</section>
