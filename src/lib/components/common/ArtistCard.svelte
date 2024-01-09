<script lang="ts">
	import type { SneakersArtist } from '../../../types/sneakers';
	import { base } from '$app/paths';
	import { LL, locale } from '$i18n/i18n-svelte';

	export let artist: SneakersArtist;
</script>

<a
	href="{base}/{$locale}/artists/{artist.id}"
	class="card rounded-xl w-auto bg-base-200 scale-95 transition-all ease-in-out duration-500 hover:scale-100"
>
	<figure>
		<img src={artist.picture} alt="item.name" class="aspect-video w-full object-cover" />
	</figure>
	<div class="card-body px-4">
		<p class="card-title text-sm text-primary md:text-xl">
			{artist.name}
		</p>
		<p>
			{artist.creations}
			{#if artist.creations === 0 || artist.creations === 1}
				{$LL.common.creation()}
			{:else}
				{$LL.common.creations()}
			{/if}
		</p>
	</div>
</a>
