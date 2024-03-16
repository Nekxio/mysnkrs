<script lang="ts">
	import HeartIcon from '$lib/components/icons/HeartIcon.svelte';
	import type { ProductTagDTO } from '@medusajs/types';
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import type { Product } from '../../../types/medusa';

	export let product: Product;

	let price: number;
	if (product?.variants?.[0]?.prices?.[0]?.amount) {
		price = product.variants[0].prices[0].amount / 100;
	}
	const tags: ProductTagDTO[] = product?.tags;
</script>

{#if product}
	<a
		href="{base}/{$locale}/products/{product.handle}"
		class="card rounded-xl w-auto h-96 bg-base-100 scale-95 transition-all ease-in-out duration-500 hover:scale-100"
	>
		<figure class="h-4/6">
			<img src={product.thumbnail} alt="item.name" class="aspect-video w-full h-full object-cover" />
		</figure>
		<button class="btn btn-circle btn-sm border-none bg-base-100/60 absolute right-2 top-2 hover:btn-primary">
			<HeartIcon />
		</button>

		<div class="badge badge-primary absolute left-3 top-4">
			{#if product.collection}
				<p class="capitalize">{product.collection.title}</p>
			{/if}
		</div>
		<div class="card-body flex flex-col justify-between p-4 h-2/6">
			<p class="card-title text-sm text-primary md:text-xl">
				{product.title}
			</p>
			{#if tags && tags.length > 0}
				{#each tags as tag}
					<p>{tag.value}</p>
				{/each}
			{:else}
				<p class="invisible">No tag</p>
			{/if}
			<p class="font-bold text-xl">{price} €</p>
		</div>
	</a>
{/if}
