<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { A11y, Navigation } from 'swiper/modules';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
	import ProductCard from '$lib/components/common/ProductCard.svelte';
	import type { Product } from '../../../types/product';
	import type { Review } from 'sveltekit-medusa-client';
	import ReviewCard from '$lib/components/common/ReviewCard.svelte';

	export let products: Product[] | undefined = [];
	export let reviews: Review[] | undefined = [];
	export let swiper: string;
	export let sectionTitle: string;

	function initSwiperElements(swiperElement: string) {
		if (swiperElement) {
			const nextEl = document.querySelector(`#${swiper}-next`);
			const prevEl = document.querySelector(`#${swiper}-prev`);
			if (nextEl instanceof HTMLElement && prevEl instanceof HTMLElement) {
				if (swiperElement === 'reviews') {
					new Swiper(`#${swiperElement}`, {
						modules: [A11y, Navigation],
						centeredSlides: false,
						allowTouchMove: true,
						breakpoints: {
							320: {
								slidesPerView: 1,
								slidesPerGroup: 1
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
								slidesPerGroup: 2
							}
						},
						cssMode: true,
						a11y: {
							enabled: true,
							prevSlideMessage: $LL.slider.previous(),
							nextSlideMessage: $LL.slider.next(),
							firstSlideMessage: $LL.slider.start(),
							lastSlideMessage: $LL.slider.end()
						},
						navigation: {
							nextEl: nextEl,
							prevEl: prevEl
						}
					});
				} else {
					new Swiper(`#${swiperElement}`, {
						modules: [A11y, Navigation],
						centeredSlides: false,
						allowTouchMove: true,
						breakpoints: {
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
								slidesPerGroup: 1
							},
							640: {
								slidesPerView: 3,
								spaceBetween: 20,
								slidesPerGroup: 2
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 30,
								slidesPerGroup: 2
							}
						},
						cssMode: true,
						a11y: {
							enabled: true,
							prevSlideMessage: $LL.slider.previous(),
							nextSlideMessage: $LL.slider.next(),
							firstSlideMessage: $LL.slider.start(),
							lastSlideMessage: $LL.slider.end()
						},
						navigation: {
							nextEl: nextEl,
							prevEl: prevEl
						}
					});
				}
			}
		}
	}

	onMount(() => {
		initSwiperElements(swiper);
	});
</script>

{#if products || reviews}
	<section id="{swiper}-carousel">
		<div class="flex flex-row justify-between pb-8">
			<h3 class="text-3xl font-medium">{sectionTitle}</h3>
			<div class="flex gap-4">
				<div id={`${swiper}-prev`}>
					<div class="btn btn-circle hover:btn-primary">
						<ArrowLeftIcon />
					</div>
				</div>
				<div id={`${swiper}-next`}>
					<div class="btn btn-circle hover:btn-primary">
						<ArrowRightIcon />
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row items-center">
			<div id={`${swiper}`} class="swiper">
				<div class="swiper-wrapper">
					{#if products}
						{#each products as product}
							<div class="swiper-slide">
								<ProductCard {product} />
							</div>
						{/each}
					{/if}
					{#if reviews}
						{#each reviews as review}
							<div class="swiper-slide">
								<ReviewCard {review} />
							</div>
						{/each}
					{/if}
					<div class="swiper-slide">
						<div class="w-fit">
							<a href="{base}/{$locale}" class="hover:underline">
								<div class="flex flex-row items-center">
									<p class="text-base">
										{$LL.slider.more()}
									</p>
									<ArrowRightIcon />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<p>{$LL.common.emptyCarousel()}</p>
{/if}
