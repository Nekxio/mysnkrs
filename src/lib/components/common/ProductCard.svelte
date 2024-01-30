<script lang="ts">
	import HeartIcon from '$lib/components/icons/HeartIcon.svelte';
	import type { ProductTagDTO } from '@medusajs/types';
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import type { Product } from '../../../types/product';

	export let product: Product;

	let price: number;
	if (product?.variants?.[0]?.prices?.[0]?.amount) {
		price = product.variants[0].prices[0].amount / 100;
	}
	const tags: ProductTagDTO[] = product?.tags;
</script>

{#if product}
	<a
		href="{base}/{$locale}/product/{product.handle}"
		class="card rounded-xl w-auto bg-base-200 scale-95 transition-all ease-in-out duration-500 h-80 hover:scale-100 flex flex-col"
	>
		<figure class="h-1/2">
			<img src={product.thumbnail} alt="item.name" class="aspect-video w-full h-full object-cover" />
		</figure>
		<button class="btn btn-circle btn-sm border-none bg-base-100/60 absolute right-2 top-2 hover:btn-primary">
			<HeartIcon />
		</button>
		<div class="card-body px-4 flex-1 flex flex-col justify-between p-4 h-1/2">
			<div class="card-actions">
				{#if product.collection}
					<div class="badge badge-outline">
						<p class="capitalize">{product.collection.title}</p>
					</div>
				{:else}
					<p class="invisible">No collection</p>
				{/if}
			</div>
			<p class="card-title text-sm text-primary md:text-xl">
				{product.title}
			</p>
			{#if tags && tags.length > 0}
				{#each tags as tag}
					<p>{tag.value}</p>
				{/each}
			{:else}
				<p class="invisible">No Tag</p>
			{/if}
			<p class="font-bold text-xl">{price} €</p>
		</div>
	</a>
{/if}
