<script>
	import ProductCard from '$lib/components/common/ProductCard.svelte';

	export let data;
	const { products } = data;
</script>

<section class="flex flex-col space-y-6 min-h-[60vh] py-8">
	<h1 class="text-3xl font-bold text-center">
		Sneakers ({products?.length})
	</h1>
	{#if products}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 p-6">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	{/if}
</section>
