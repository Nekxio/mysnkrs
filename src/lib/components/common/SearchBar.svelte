<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
	import { productsStore } from '../../../stores/productsStore';
	import type { Product } from '../../../types/medusa';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	let products: Product[] = $productsStore;
	let value: string;
	let searchedProducts: Product[] = [];

	const search = () => {
		if (value.length >= 3) {
			searchedProducts = products.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()));
		} else {
			searchedProducts = [];
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			goto(`${base}/${$locale}/search?query=${value}`);
			value = '';
		}
	};
</script>

<div class="flex flex-col items-center">
	<div class="flex w-full flex-row items-center rounded-full border-2 border-transparent bg-base-200 px-4 py-1">
		<SearchIcon />
		<input
			id="headerSearch"
			type="search"
			placeholder={$LL.header.search()}
			class="w-72 rounded-full border-none bg-base-200 p-1 outline-none"
			bind:value
			on:keyup={search}
			on:keydown={handleKeyDown}
		/>
	</div>
	{#if value}
		<div class="absolute card bg-base-200 max-w-96 shadow-xl mt-14 transition-all text-wrap ease-in-out duration-700">
			<ul class="card-body p-2">
				{#each searchedProducts.slice(0, 3) as item}
					<li class="flex items-center w-full gap-4 rounded-lg hover:bg-neutral/10">
						<a href="{base}/{$locale}/products/{item.handle}" class="flex items-center w-full gap-4 rounded-lg p-4">
							<img src={item.thumbnail} alt="item.name" class="aspect-square w-1/3 rounded h-full object-cover" />
							<div class="w-2/3">
								<p>{item.title}</p>
								<p>{item.collection.title}</p>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
