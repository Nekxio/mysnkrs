<script lang="ts">
	import { assets, base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
	import type { SneakersArtist } from '../../../types/sneakers';

	export let artist: SneakersArtist;
</script>

{#if artist}
	<a
		href="{base}/{$locale}/artists/{artist.id}"
		class="card rounded-xl w-auto h-96 bg-base-100 scale-95 transition-all ease-in-out duration-500 hover:scale-100"
	>
		<figure class="h-4/6">
			<img
				src="{assets}/images/artists/{artist.picture}"
				alt="item.name"
				class="aspect-square w-full h-full object-cover"
			/>
		</figure>

		<div class="badge badge-ghost absolute right-3 top-4">
			{#if artist.tags}
				<p class="capitalize">{artist.tags[0]}</p>
			{/if}
		</div>
		<div class="card-body flex flex-col justify-between p-4 h-2/6">
			<p class="card-title text-sm text-primary md:text-xl">
				{artist.name}
			</p>
			<p class="card-normal">{artist.nbSneakers} {$LL.artists.creations()}</p>
			{#if artist.tags && artist.tags.length}
				<div class="flex flex-row gap-4 flex-wrap">
					{#each artist.tags as tag}
						<p class="badge badge-ghost w-fit flex-initial">{tag}</p>
					{/each}
				</div>
			{:else}
				<p class="invisible">No tag</p>
			{/if}
		</div>
	</a>
{/if}
