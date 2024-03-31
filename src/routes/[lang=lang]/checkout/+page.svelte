<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import type { Cart, CustomerInfos } from '../../../types/medusa';
	import type { Address } from 'sveltekit-medusa-client';
	import { checkoutStore } from '../../../stores/checkoutStore';
	import DashboardForm from '$lib/components/dashboard/DashboardForm.svelte';
	import { base } from '$app/paths';

	const user: CustomerInfos | undefined = $page.data.user || undefined;
	let cart: Cart | undefined = user ? user.cart : undefined;
	let currentIndex = 0;
	let useAnotherAddressForBilling: boolean = false;
	let isFormValid: boolean = false;
	let billingAddress: Address | undefined = undefined;
	let selectedAddress: Address | undefined = undefined;

	function addAddressesToStore(shippingAddress: Address, billingAddress?: Address) {
		selectedAddress = shippingAddress;
		!useAnotherAddressForBilling &&
			checkoutStore.set({ ...$checkoutStore, shippingAddress: shippingAddress, billingAddress: shippingAddress });
		isFormValid &&
			billingAddress &&
			checkoutStore.set({ ...$checkoutStore, shippingAddress: shippingAddress, billingAddress: billingAddress });
	}

	function previous() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	function next() {
		switch (currentIndex) {
			case 0:
				if ($checkoutStore.shippingAddress && useAnotherAddressForBilling && isFormValid) {
					addAddressesToStore($checkoutStore.shippingAddress, billingAddress);
					currentIndex++;
				} else if ($checkoutStore.shippingAddress && !useAnotherAddressForBilling) {
					addAddressesToStore($checkoutStore.shippingAddress, $checkoutStore.shippingAddress);

					currentIndex++;
				}
				break;
			case 1:
				currentIndex++;
				break;
			default:
				break;
		}
	}

	function handleFormValid(event: CustomEvent<boolean>) {
		isFormValid = event.detail;
	}

	function handleFormValues(event: CustomEvent<Address>) {
		billingAddress = event.detail;
	}

	$: cart = $page.data.user.cart;
</script>

<section>
	<div class="flex flex-row justify-between min-h-[60vh] pt-6 gap-x-10">
		<div class="flex flex-col space-y-6 min-h-[50vh]">
			<div class="space-y-6 transition-all h-full ease-in-out duration-500" class:hidden={currentIndex !== 0}>
				<h2 class="text-3xl font-bold">{$LL.checkout.address.title()}</h2>
				<p class="text-xl font-bold">{$LL.checkout.address.chooseAddress()}</p>
				{#if user?.shipping_addresses && user?.shipping_addresses.length > 0}
					<div class="grid grid-cols-2 gap-6">
						{#each user?.shipping_addresses as address}
							<button
								class="card border-neutral border text-left scale-95 transition-all ease-in-out duration-500 hover:scale-100"
								class:bg-primary={selectedAddress === address}
								class:text-white={selectedAddress === address}
								on:click={() => addAddressesToStore(address)}
							>
								<span class="card-body">
									<span class="card-title capitalize col-span-2 text-clip"
										>{address.first_name} {address.last_name}</span
									>
									{#if address.company}
										<span class="capitalize col-span-2 text-clip">{address.company}</span>
									{:else}
										<span></span>
									{/if}
									<span class="grid grid-cols-2 gap-1 items-center">
										<span class="col-span-2 text-sm text-clip">{address.address_1}</span>
										{#if address.address_2}
											<span class="col-span-2 text-sm text-clip">{address.address_2}</span>
										{:else}
											<span class="col-span-2"></span>
										{/if}
										<span class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap"
											>{address.postal_code}</span
										>
										<span class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap"
											>{address.city}</span
										>
										<span class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap"
											>{address.province}</span
										>
									</span>
								</span>
							</button>
						{/each}
					</div>
					<div class="w-fit">
						<label class="cursor-pointer label">
							<span class="label-text pr-4">{$LL.checkout.address.differentBilling()}</span>
							<input type="checkbox" class="toggle toggle-primary" bind:checked={useAnotherAddressForBilling} />
						</label>
					</div>
					<div class:hidden={!useAnotherAddressForBilling}>
						<DashboardForm on:formValid={handleFormValid} on:formValues={handleFormValues} formType="billingAddress" />
					</div>
				{:else}
					<div class="flex flex-col space-y-6">
						<p>{$LL.checkout.address.noAddress()}</p>
						<a href="{base}/{$locale}/account/dashboard/addresses/new" class="btn btn-primary"
							>{$LL.checkout.address.addAddress()}</a
						>
					</div>
				{/if}
			</div>
			<div class="min-h-[50vh] transition-all ease-in-out duration-500" class:hidden={currentIndex !== 1}>fgfgd</div>

			<button class="btn btn-outline btn-primary w-fit" on:click={previous} class:hidden={currentIndex === 0}
				>{$LL.checkout.previous()}</button
			>
			<button class="btn btn-primary w-fit" on:click={next}>{$LL.checkout.next()}</button>
		</div>
		{#if cart}
			<div class="lg:w-1/3 space-y-3">
				<h2 class="text-3xl font-bold">{$LL.cart.summarize()}</h2>
				<div class="overflow-x-auto">
					<table class="table">
						<thead>
							<tr>
								<th>{$LL.checkout.item()}</th>
								<th>{$LL.cart.quantity()}</th>
								<th>{$LL.checkout.price()}</th>
							</tr>
						</thead>
						<tbody>
							{#each cart.items as item}
								<tr>
									<td>{item.title}</td>
									<td>{item.quantity}</td>
									<td>{((item.quantity * item.unit_price) / 100).toFixed(2)} €</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
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
			</div>
		{/if}
	</div>
</section>
