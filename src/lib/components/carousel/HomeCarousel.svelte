<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { browser } from '$app/environment';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
	import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';

	function initHomeSwiper(node: HTMLElement | null) {
		if (node) {
			const nextEl = node.querySelector('.swiper-home-next');
			const prevEl = node.querySelector('.swiper-home-prev');
			const el = node.querySelector('.swiper-pagination');
			if (nextEl instanceof HTMLElement && prevEl instanceof HTMLElement && el instanceof HTMLElement) {
				new Swiper(node, {
					modules: [Autoplay, A11y, Navigation, Pagination],
					slidesPerView: 1,
					centeredSlides: true,
					mousewheel: false,
					autoplay: {
						delay: 7500,
						disableOnInteraction: true,
						pauseOnMouseEnter: true
					},
					allowTouchMove: true,
					loop: true,
					breakpoints: {
						320: {
							navigation: {
								enabled: false
							}
						},
						1024: {
							navigation: {
								enabled: true
							}
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
					},
					pagination: {
						el: el,
						clickable: true
					}
				});
			}
		}
	}

	export let slides: Array<{ imageAlt: string; imageSrc: string }> = [];
</script>

{#if browser}
	<section id="homeCarousel" class="relative left-1/2 w-screen h-fit -translate-x-1/2 transform overflow-hidden">
		<div class="swiper bg-primary max-h-96" use:initHomeSwiper>
			<div class="swiper-wrapper">
				{#each slides as item}
					<div class="swiper-slide">
						<img src={item.imageSrc} alt={item.imageAlt} class="aspect-video w-full object-cover backdrop-blur-sm" />
					</div>
				{/each}
			</div>
			<div class="swiper-home-prev absolute top-44 left-4 z-50 hidden lg:flex">
				<div class="btn btn-circle hover:btn-primary">
					<ArrowLeftIcon />
				</div>
			</div>
			<div class="swiper-home-next absolute top-44 right-4 z-50 hidden lg:flex">
				<div class="btn btn-circle hover:btn-primary">
					<ArrowRightIcon />
				</div>
			</div>
			<div class="swiper-pagination">
				<div class="swiper-pagination-bullet" />
				<div class="swiper-pagination-bullet-active" />
			</div>
		</div>
	</section>

	<style>
		.swiper-pagination-bullet {
			@apply bg-primary;
		}
		.swiper-pagination-bullet-active {
			@apply bg-primary;
		}
	</style>
{/if}
