<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import TimeIcon from '$lib/components/icons/TimeIcon.svelte';
	import InstalmentPayment from '$lib/components/icons/InstalmentPayment.svelte';
	import ReturnIcon from '$lib/components/icons/ReturnIcon.svelte';
	import ShoppingCartIcon from '$lib/components/icons/ShoppingCartIcon.svelte';
	import Carousel from '$lib/components/carousel/Carousel.svelte';

	export let data: PageData;
	let { product, popularProducts } = data;
	let imageView: string | undefined = product?.images?.[0]?.url;

	let price: number;
	if (product?.variants?.[0]?.prices?.[0]?.amount) {
		price = product.variants[0].prices[0].amount / 100;
	}

	const changeImageView = (newImageView: string) => {
		imageView = newImageView;
	};

	$: product = data.product;
	$: imageView = product?.images?.[0]?.url;
</script>

<svelte:head>
	<title>{`MySnkrs - ${$LL.pages.home()}` || 'MySnkrs'}</title>
</svelte:head>

{#if product}
	<section id="product">
		<div id="breadcrumbs" class="text-sm breadcrumbs mb-8">
			<ul>
				<li><a href="{base}/{$locale}">{$LL.pages.home()}</a></li>
				<li><a href="{base}/{$locale}/products">{$LL.pages.products()}</a></li>
				<li>{product.title}</li>
			</ul>
		</div>
		<div class="flex flex-col lg:flex-row lg:gap-x-16">
			<div class="flex flex-row lg:w-1/2 mb-12 lg:mb-0">
				<div class="grid grid-cols-1 lg:h-3/4 w-1/4 items-center">
					{#each product.images as image}
						<button
							type="button"
							class="btn btn-outline bg-neutral-100 btn-primary size-14 md:size-24 p-0 rounded-xl"
							on:click={() => changeImageView(image.url)}
						>
							<img src={image.url} alt={product.title} class="aspect-square object-cover rounded-xl" />
						</button>
					{/each}
				</div>
				<div id="imageView" class="h-3/4 w-3/4 bg-neutral-100 border-primary border rounded-xl">
					<img src={imageView} alt={product.title} class="aspect-square object-cover rounded-xl" />
				</div>
			</div>
			<div class="flex flex-col gap-y-4 lg:w-1/2 items-start">
				<h1 class="text-3xl font-bold text-primary">{product.title}</h1>
				<h2 class="text-xl text-neutral">{product.collection.title}</h2>
				<p class="text-2xl font-bold">{price} €</p>
				{#if product.variants.length}
					<form action="?/addToCart" method="post" class="space-y-6">
						<div class="form-control w-full max-w-xs">
							<label for="variantSelection" class="label">
								<span class="text-xl text-primary">{$LL.productDetails.sizeSelection.title()}</span>
							</label>
							<select name="variantSelection" class="select select-bordered">
								<option disabled selected>-- {$LL.productDetails.sizeSelection.placeholder()} --</option>
								{#each product.variants as variant}
									<option value={variant.id}
										>{variant.title}
										- {variant.inventory_quantity}
										{$LL.productDetails.sizeSelection.available()}</option
									>
								{/each}
							</select>
						</div>
						<div class="flex flex-row flex-wrap my-4 gap-4">
							<button type="submit" class="btn btn-primary rounded-full">
								{$LL.productDetails.addToCart()}
								<ShoppingCartIcon />
							</button>
						</div>
					</form>
				{/if}
				<div class="flex flex-col gap-y-2">
					<p class="text-sm">{$LL.productDetails.informations.seller()} : MySnkrz</p>
					<div class="flex flex-row gap-x-2 font-bold text-sm">
						<TimeIcon />
						<p>{$LL.productDetails.informations.delivery()}</p>
					</div>
					<div class="flex flex-row gap-x-2 font-bold text-sm">
						<InstalmentPayment />
						<p>{$LL.productDetails.informations.payment()}</p>
					</div>
					<div class="flex flex-row gap-x-2 font-bold text-sm">
						<ReturnIcon />
						<p>{$LL.productDetails.informations.return()}</p>
					</div>
				</div>
				<div class="flex flex-col w-full">
					<div class="collapse collapse-plus">
						<input type="radio" name="accordion" />
						<div class="collapse-title text-xl font-medium">
							{$LL.productDetails.productDetails()}
						</div>
						<div class="collapse-content">
							<p>Test</p>
						</div>
					</div>
					<div class="divider"></div>
					<div class="collapse collapse-plus">
						<input type="radio" name="accordion" />
						<div class="collapse-title text-xl font-medium">
							{$LL.productDetails.deliveryReturns()}
						</div>
						<div class="collapse-content">
							<p>Test</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<p>{$LL.common.emptyProduct()}</p>
{/if}
<Carousel products={popularProducts} swiper="productsCollection" sectionTitle={$LL.productDetails.sameCollection()} />
<Carousel products={popularProducts} swiper="relatedProducts" sectionTitle={$LL.productDetails.relatedProducts()} />
