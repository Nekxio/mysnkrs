<script lang="ts">
	import type { Product } from '../../../types/medusa';
	import ProductCard from '$lib/components/common/ProductCard.svelte';
	import LL from '$i18n/i18n-svelte';
	import SearchBar from '$lib/components/common/SearchBar.svelte';

	export let data;

	let search: Product[];
	let queryParam: string;
	$: search = data.searchResults || [];
	$: queryParam = data.query || '';
</script>

<div class="lg:hidden w-fit self-center">
	<SearchBar />
</div>
<section class="flex flex-col space-y-6 min-h-[60vh]">
	<h1 class="text-3xl font-bold text-center">
		{$LL.common.searchResults()} "{queryParam}" ({search.length})
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 p-6">
		{#each search as item}
			<ProductCard product={item} />
		{/each}
	</div>
</section>
