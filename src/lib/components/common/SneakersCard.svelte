<script lang="ts">
	import HeartIcon from '$lib/components/icons/HeartIcon.svelte';
	import type { SneakersItem } from '../../../types/sneakers';
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';

	export let sneakers: SneakersItem;
</script>

<a
	href="{base}/{$locale}/sneakers/{sneakers.id}"
	class="card rounded-xl w-auto bg-base-200 scale-95 transition-all ease-in-out duration-500 hover:scale-100"
>
	<figure>
		<img src={sneakers.image} alt="item.name" class="aspect-video w-full object-cover" />
	</figure>
	<button class="btn btn-circle btn-sm border-none bg-base-100/60 absolute right-2 top-2 hover:btn-primary">
		<HeartIcon />
	</button>
	<div class="card-body px-4">
		<div class="card-actions">
			<div class="badge badge-outline">
				<p class="capitalize">{sneakers.category.name}</p>
			</div>
		</div>
		<p class="card-title text-sm text-primary md:text-xl">
			{sneakers.name}
		</p>
		<p>{sneakers.artist.name}</p>
		<p class="font-bold text-xl">{sneakers.price} €</p>
	</div>
</a>
