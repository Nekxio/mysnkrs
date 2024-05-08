<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import type { Cart } from '../../../types/medusa';
	import { base } from '$app/paths';
	import { enhance } from '$app/forms';

	let cart: Cart | undefined = $page.data.cart;

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		target.form && target.form.submit();
	}

	$: cart = $page.data.cart;
</script>

<section
	class="min-h-[60vh] flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 py-8 gap-x-20 divide-y-2 lg:divide-y-0"
	class:items-center={cart === undefined}
	class:justify-center={cart === undefined}
>
	{#if cart && cart.items.length}
		<div class="lg:w-2/3 space-y-3">
			<h1 class="text-3xl font-bold">{$LL.cart.title()}</h1>
			<div class="flex flex-col divide-y divide-base-content/20 space-y-5 pt-5">
				{#each cart.items as item (item.id)}
					<div class="flex flex-row justify-between items-center pt-6">
						<div class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-x-10 w-1/4">
							<img src={item.thumbnail} alt={item.title} class="border rounded-xl max-w-24 h-32 object-cover" />
							<div class="flex flex-col justify-center">
								<p class="font-semibold">{item.title}</p>
								<p class="">{item.variant.title}</p>
							</div>
						</div>
						<div class="w-1/4 flex justify-center">
							<form
								id="form{item.title}"
								action="?/updateItemQuantity"
								name="updateItemQuantity{item.title}"
								method="post"
								class="flex flex-col items-center"
								use:enhance
							>
								<label for="itemQuantity"><span class="label-text">{$LL.cart.quantity()}</span></label>
								<select name="itemQuantity" class="select w-20" on:change={handleChange} required>
									{#each Array.from({ length: Math.min(item.variant.inventory_quantity, 10) }, (_, i) => i + 1) as quantity}
										<option value={quantity} selected={quantity === item.quantity}>{quantity}</option>
									{/each}
								</select>
								<label>
									<input type="hidden" name="itemId" value={item.id} />
								</label>
							</form>
						</div>
						<div class="flex flex-col items-end space-y-2 w-1/4">
							<span class="text-neutral/60">{item.quantity} x {(item.unit_price / 100).toFixed(2)} €</span>
							<span class="font-bold">{((item.unit_price * item.quantity) / 100).toFixed(2)} €</span>
						</div>
						<div class="w-1/4">
							<form
								id="delete{item.title}"
								action="?/deleteItemQuantity"
								name="deleteItemQuantity{item.title}"
								method="post"
								class="flex flex-col items-center"
								use:enhance
							>
								<label>
									<input type="hidden" name="itemId" value={item.id} />
								</label>
								<button class="btn btn-sm btn-circle" type="submit"
									><span class="w-4"
										><svg
											clip-rule="evenodd"
											fill-rule="evenodd"
											stroke-linejoin="round"
											stroke-miterlimit="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
											/></svg
										></span
									></button
								>
							</form>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="lg:w-1/3 space-y-3 pt-6">
			<h2 class="text-3xl font-bold">{$LL.cart.summarize()}</h2>
			<div class="divider" />
			<div class="flex flex-row justify-between">
				<p>{$LL.account.dashboard.orders.details.subtotal()}</p>
				<p>{(cart.subtotal / 100).toFixed(2)} €</p>
			</div>
			<div class="flex flex-row justify-between">
				<p>{$LL.account.dashboard.orders.details.shipping()}</p>
				<p>{(cart.shipping_total / 100).toFixed(2)} €</p>
			</div>
			<div class="flex flex-row justify-between">
				<p>{$LL.account.dashboard.orders.details.taxes()}</p>
				<p>{(cart.tax_total / 100).toFixed(2)} €</p>
			</div>
			<div class="border-dashed border" />
			<div class="flex flex-row justify-between">
				<p>{$LL.account.dashboard.orders.details.total()}</p>
				<p>{(cart.total / 100).toFixed(2)} €</p>
			</div>
			<div class="divider" />
			<a href="{base}/{$locale}/checkout/addresses" class="btn btn-primary w-full">{$LL.cart.placeOrder()}</a>
		</div>
	{:else}
		<div class="space-y-6 justify-center items-center w-full flex flex-col">
			<p>{$LL.cart.cartEmpty()}</p>
			<a href="{base}/{$locale}/products" class="btn btn-primary">{$LL.cart.exploreProducts()}</a>
		</div>
	{/if}
</section>
