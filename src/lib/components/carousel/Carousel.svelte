<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { browser } from '$app/environment';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { A11y, Navigation } from 'swiper/modules';
	import type { SneakersItem, SneakersArtist, SneakersComment } from '../../../types/sneakers';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
	import SneakersCard from '$lib/components/common/SneakersCard.svelte';
	import ArtistCard from '$lib/components/common/ArtistCard.svelte';
	import CommentCard from '$lib/components/common/CommentCard.svelte';

	export let elements: SneakersItem[] | SneakersArtist[] | SneakersComment[] = [];
	export let swiper: string;
	export let sectionTitle: string;

	function isSneakersItem(elements: SneakersItem[] | SneakersArtist[] | SneakersComment[]): elements is SneakersItem[] {
		return 'artist' in elements[0];
	}

	function isSneakersArtist(
		elements: SneakersItem[] | SneakersArtist[] | SneakersComment[]
	): elements is SneakersArtist[] {
		return 'creations' in elements[0];
	}

	function isSneakersComment(
		elements: SneakersItem[] | SneakersArtist[] | SneakersComment[]
	): elements is SneakersComment[] {
		return 'comment' in elements[0];
	}

	function initSwiperElements(swiperElement: string) {
		if (swiperElement) {
			const nextEl = document.querySelector(`#${swiper}-next`);
			const prevEl = document.querySelector(`#${swiper}-prev`);
			if (nextEl instanceof HTMLElement && prevEl instanceof HTMLElement) {
				if (swiperElement === 'comments') {
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
		isSneakersComment(elements);
		initSwiperElements(swiper);
	});
</script>

{#if browser}
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
				<div class="swiper-wrapper flex items-center">
					{#if isSneakersItem(elements)}
						{#each elements as element}
							<div class="swiper-slide">
								<SneakersCard sneakers={element} />
							</div>
						{/each}
					{/if}
					{#if isSneakersArtist(elements)}
						{#each elements as element}
							<div class="swiper-slide">
								<ArtistCard artist={element} />
							</div>
						{/each}
					{/if}
					{#if isSneakersComment(elements)}
						{#each elements as element}
							<div class="swiper-slide">
								<CommentCard comment={element} />
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
{/if}
