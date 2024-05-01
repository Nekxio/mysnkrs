<script>
	import { artists } from '../../../data/example';
	import ArtistCard from '$lib/components/common/ArtistCard.svelte';
	import { assets, base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
</script>

<section>
	<div id="breadcrumbs" class="text-sm breadcrumbs mb-8">
		<ul>
			<li><a href="{base}/{$locale}">{$LL.pages.home()}</a></li>
			<li><a href="{base}/{$locale}/artists">{$LL.pages.artists()}</a></li>
		</ul>
	</div>
	<div class="flex max-lg:flex-col justify-between items-center gap-12 lg:gap-20">
		<div class="text-4xl font-bold lg:w-1/2">
			<p>{$LL.artists.title1()}</p>
			<p>{$LL.artists.title2()}</p>
		</div>
		<p class="lg:w-1/2">
			{$LL.artists.subtitle()}
		</p>
	</div>
</section>
<section class="hero">
	<div class="hero-content lg:gap-20 flex-col lg:flex-row">
		<div class="lg:w-2/3">
			<img src="{assets}/images/artists/artist.png" alt="" class="aspect-video object-cover rounded-2xl" />
		</div>
		<div class="lg:w-1/2 space-y-6">
			<p class="badge badge-ghost">Pop-art</p>
			<h1 class="text-5xl font-bold">William Cruze</h1>
			<p>{$LL.artists.artistDescription()}</p>
			<p>4 {$LL.artists.creations()}</p>
			<div class="w-full max-lg:text-center">
				<button class="btn btn-primary">{$LL.artists.discoverArtist()}</button>
			</div>
		</div>
	</div>
</section>
<section>
	{#if artists}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 p-6">
			{#each artists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	{/if}
</section>
