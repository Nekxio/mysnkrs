<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { browser } from '$app/environment';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
	import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
	import type { HomeCarousel } from '../../../types/carousel';

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

	export let slides: HomeCarousel[] = [];
</script>

{#if browser}
	<section id="homeCarousel" class="relative left-1/2 w-screen h-fit -translate-x-1/2 transform overflow-hidden">
		<div class="swiper bg-primary max-h-96" use:initHomeSwiper>
			<div class="swiper-wrapper">
				{#each slides as item}
					<div class="swiper-slide">
						<div>
							<img src={item.imageSrc} alt={item.title} class="aspect-video w-full object-cover brightness-50" />
							<div
								class="absolute top-0 left-0 flex flex-col justify-center w-full h-52 py-20 px-12 md:px-20 md:py-52 lg:px-32"
							>
								<h2 class="text-3xl md:text-5xl font-bold text-white">{item.title}</h2>
								<p class="text-xl md:text-2xl text-white mt-4">{item.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="swiper-home-prev absolute top-44 left-4 hidden lg:flex">
				<div class="btn btn-circle hover:btn-primary">
					<ArrowLeftIcon />
				</div>
			</div>
			<div class="swiper-home-next absolute top-44 right-4 hidden lg:flex">
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
