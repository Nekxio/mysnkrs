<script lang="ts">
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import LL, { locale } from '$i18n/i18n-svelte';
	import { artists, brands } from '../../data/example';
	import { assets, base } from '$app/paths';
	import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
	import BrandIcon from '$lib/components/icons/BrandIcon.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { products } = data;
</script>

<svelte:head>
	<title>{`MySnkrs - ${$LL.pages.home()}` || 'MySnkrs'}</title>
</svelte:head>

<section class="relative left-1/2 w-screen h-[60vh] -translate-x-1/2 transform overflow-hidden">
	<video class="w-full" autoplay muted loop>
		<source
			src="https://s3-figma-videos-production-sig.figma.com/video/955890554601429583/TEAM/c6d5/edc5/-2108-48d1-a01b-e35c65d95db0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVZNXPGmIorBfMH~ouI97IyczXqi-gXMm1WAqFIfZMhzCzjU9NJ~ZYyDQKa~69Ay3jNV9KRKW5ZwnrzyznmRV72PfagqWDzWBN~kEyic3GCiln0Rj0GHXuBIcokxqNCqIL1BXg~meGBk9FC~bSljgvddml8lT3dsYi36dn3Jjlc~wPp2Ad7MJaMHInUyWb4iWUOyocsG9hIZeP8NOplyN6EGPL5-Z1p73Dwqz0~4yDpVPCYCdirNbJGVQyFBKNpQ7GnTzZWGLgKLB~2ssFNaTwfIC50nA4XVGNKfekIxwBCNnX8ZpSX8WZ~No84Ct0pL9Ukqpm5d76jOY70MxoMSIA__"
			type="video/mp4"
		/>
		Your browser does not support the video tag.
	</video>
	<div
		class="absolute flex flex-col justify-center p-20 top-0 w-screen h-full backdrop-filter backdrop-contrast-50 backdrop-blur-sm z-20"
	>
		<div class="w-1/2 space-y-4">
			<p class="text-3xl text-white font-bold uppercase">
				{$LL.home.videoSectionTitle()} <span class="text-3xl font-bold uppercase text-primary">MySnkrs</span>
			</p>
			<p class="text-2xl font-bold text-white uppercase text-wrap">{$LL.home.videoSectionSubtitle()}</p>
		</div>
	</div>
</section>

<Carousel {products} swiper="popularItems" sectionTitle={$LL.home.featuredSectionTitle()} />
<section id="informations">
	<div class="grid grid-cols-1 md:grid-cols-2 rounded-xl bg-base-200 overflow-hidden">
		<div class="flex flex-col justify-center p-10 order-1 lg:p-20">
			<div class="flex flex-col gap-4">
				<h3 class="text-3xl font-bold">
					{$LL.home.informations.firstTitle()}
				</h3>
				<p class="">
					{$LL.home.informations.firstDescription()}
				</p>
			</div>
		</div>
		<div class="order-2">
			<img
				src="{assets}/images/home/information1.jpg"
				alt=""
				class="object-cover w-full aspect-square lg:aspect-video"
			/>
		</div>
		<div class="order-4 md:order-3">
			<img
				src="{assets}/images/home/information2.jpg"
				alt=""
				class="object-cover w-full aspect-square lg:aspect-video"
			/>
		</div>
		<div class="flex flex-col justify-center p-10 order-3 md:order-4 lg:p-20">
			<div class="flex flex-col gap-4">
				<h3 class="text-3xl font-bold">
					{$LL.home.informations.secondTitle()}
				</h3>
				<p class="">
					{$LL.home.informations.secondDescription()}
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-center p-10 order-5 lg:p-20">
			<div class="flex flex-col gap-4">
				<h3 class="text-3xl font-bold">
					{$LL.home.informations.thirdTitle()}
				</h3>
				<p class="">
					{$LL.home.informations.thirdDescription()}
				</p>
			</div>
		</div>
		<div class="order-6">
			<img
				src="{assets}/images/home/information3.jpg"
				alt=""
				class="object-cover w-full aspect-square lg:aspect-video"
			/>
		</div>
	</div>
</section>
<section
	id="statistics"
	class="hero bg-base-200 relative left-1/2 w-screen h-fit -translate-x-1/2 transform overflow-hidden"
>
	<div class="flex flex-row">
		<div class="w-full lg:w-2/3 flex flex-col justify-center p-12 lg:px-32 gap-6">
			<h3 class="text-3xl font-bold">{$LL.home.statistics.title()}</h3>
			<p>{$LL.home.statistics.description()}</p>
			<div class="stats stats-vertical md:stats-horizontal shadow">
				<div class="stat text-center">
					<div class="stat-value text-primary">{artists.length}</div>
					<div class="stat-title">
						{#if artists.length === 0 || artists.length === 1}
							<p class="capitalize">{$LL.common.artist()}</p>
						{:else}
							<p class="capitalize">{$LL.common.artists()}</p>
						{/if}
					</div>
				</div>
				<div class="stat text-center">
					<div class="stat-value text-primary">{products.length}</div>
					<div class="stat-title">
						{#if products.length === 0 || products.length === 1}
							<p class="capitalize">{$LL.common.model()}</p>
						{:else}
							<p class="capitalize">{$LL.common.models()}</p>
						{/if}
					</div>
				</div>
				<div class="stat text-center">
					<div class="stat-value text-primary">{brands.length}</div>
					<div class="stat-title">
						{#if brands.length === 0 || brands.length === 1}
							<p class="capitalize">{$LL.common.brand()}</p>
						{:else}
							<p class="capitalize">{$LL.common.brands()}</p>
						{/if}
					</div>
				</div>
			</div>
			<a
				href="{base}/{$locale}/products"
				class="btn btn-lg btn-link btn-primary no-underline lg:self-start p-0 hover:underline"
			>
				{$LL.home.statistics.cta()}
				<ArrowRightIcon />
			</a>
		</div>
		<div class="hidden lg:flex lg:w-1/3">
			<img src="{assets}/images/home/statistics.jpg" class="w-auto" alt="" />
		</div>
	</div>
</section>
<section id="brands">
	<div class="flex flex-col gap-4 pb-8 md:w-1/2">
		<h2 class="text-4xl font-bold text-primary">{$LL.home.brands.title()}</h2>
		<p>{$LL.home.brands.description()}</p>
	</div>
	<div class="grid grid-cols-2 md:grid-cols-5 items-center gap-8 p-8">
		{#each brands.slice(0, 5) as brand}
			<div class="flex justify-center">
				<div class="w-40">
					<BrandIcon brand={brand.name} />
				</div>
			</div>
		{/each}
	</div>
</section>
