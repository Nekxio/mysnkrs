<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import type { Address } from 'sveltekit-medusa-client';
	import DashboardForm from '$lib/components/dashboard/DashboardForm.svelte';
	import { base } from '$app/paths';
	import type { CustomerInfos } from '../../../../types/medusa';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	const user: CustomerInfos | undefined = $page.data.user || undefined;

	let useAnotherAddressForBilling: boolean = false;
	let isFormValid: boolean = false;
	let selectedAddress: Address | undefined = undefined;
	let billingAddress: Address | undefined = undefined;

	let isError: boolean = false;
	let isSending: boolean = false;
	let isFormSent: boolean = false;
	const updateSelectedAddress = (address: Address) => {
		selectedAddress = address;
	};
	const handleFormValid = (event: CustomEvent<boolean>) => {
		isFormValid = event.detail;
	};

	const handleFormValues = (event: CustomEvent<Address>) => {
		billingAddress = event.detail;
	};
</script>

<div class="space-y-6 transition-all h-full ease-in-out duration-500">
	<h2 class="text-3xl font-bold">{$LL.checkout.address.title()}</h2>
	<p class="text-xl font-bold">{$LL.checkout.address.chooseAddress()}</p>
	{#if user?.shipping_addresses && user?.shipping_addresses.length > 0}
		<div class="grid grid-cols-2 gap-6">
			{#each user?.shipping_addresses as address}
				<button
					class="card border-neutral border text-left scale-95 transition-all ease-in-out duration-500 hover:scale-100"
					class:bg-primary={selectedAddress === address}
					class:text-white={selectedAddress === address}
					on:click={() => updateSelectedAddress(address)}
				>
					<span class="card-body">
						<span class="card-title capitalize col-span-2 text-clip">{address.first_name} {address.last_name}</span>
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
							<span class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap">{address.city}</span>
							<span class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap">{address.province}</span
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

		<form
			method="post"
			name="updateCartAddresses"
			action="?/updateCartAddresses"
			enctype="multipart/form-data"
			class="flex flex-col space-y-6 max-w-2xl"
			use:enhance={() => {
				isSending = true;
				return async ({ update, result }) => {
					await update({ reset: false });
					isSending = false;
					if (result && result.type === 'success') {
						isFormSent = true;
						await goto(`${base}/${$locale}/checkout/shipping`);
					}

					if ((result && result.type === 'failure') || result.type === 'error') {
						isError = true;
						setTimeout(() => {
							isError = false;
						}, 2500);
					}
				};
			}}
		>
			<label><input type="hidden" name="shippingAddress1" value={selectedAddress?.address_1} /></label>
			<label><input type="hidden" name="shippingAddress2" value={selectedAddress?.address_2} /></label>
			<label><input type="hidden" name="shippingCity" value={selectedAddress?.city} /></label>
			<label><input type="hidden" name="shippingCompany" value={selectedAddress?.company} /></label>
			<label><input type="hidden" name="shippingCountry" value={selectedAddress?.country_code} /></label>
			<label><input type="hidden" name="shippingPhone" value={selectedAddress?.phone} /></label>
			<label><input type="hidden" name="shippingPostalCode" value={selectedAddress?.postal_code} /></label>
			<label><input type="hidden" name="shippingProvince" value={selectedAddress?.province} /></label>
			<label><input type="hidden" name="shippingFirstName" value={selectedAddress?.first_name} /></label>
			<label><input type="hidden" name="shippingLastName" value={selectedAddress?.last_name} /></label>

			<label>
				<input
					type="hidden"
					name="billingAddress1"
					value={billingAddress ? billingAddress.address_1 : selectedAddress?.address_1}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingAddress2"
					value={billingAddress ? billingAddress.address_2 : selectedAddress?.address_2}
				/>
			</label>
			<label>
				<input type="hidden" name="billingCity" value={billingAddress ? billingAddress.city : selectedAddress?.city} />
			</label>
			<label>
				<input
					type="hidden"
					name="billingCompany"
					value={billingAddress ? billingAddress.company : selectedAddress?.company}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingCountry"
					value={billingAddress ? billingAddress.country_code.toLowerCase() : selectedAddress?.country_code}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingPhone"
					value={billingAddress ? billingAddress.phone : selectedAddress?.phone}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingPostalCode"
					value={billingAddress ? billingAddress.postal_code : selectedAddress?.postal_code}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingProvince"
					value={billingAddress ? billingAddress.province : selectedAddress?.province}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingFirstName"
					value={billingAddress ? billingAddress.first_name : selectedAddress?.first_name}
				/>
			</label>
			<label>
				<input
					type="hidden"
					name="billingLastName"
					value={billingAddress ? billingAddress.last_name : selectedAddress?.last_name}
				/>
			</label>
			<div class="flex flex-row items-center space-x-4">
				{#if isError}
					<p>{$LL.account.dashboard.error()}</p>
				{/if}
				<button
					type="submit"
					class="btn btn-primary w-fit flex flex-row space-x-2"
					disabled={(!useAnotherAddressForBilling && !selectedAddress) ||
						(useAnotherAddressForBilling && (!selectedAddress || !isFormValid))}
				>
					{#if isSending}
						{$LL.common.updating()}
						<svg
							class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					{/if}
					{#if isFormSent}
						{$LL.cart.cartUpdated()}
						<svg
							clip-rule="evenodd"
							fill-rule="evenodd"
							stroke-linejoin="round"
							stroke-miterlimit="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 fill-current"
						>
							<path
								d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
								fill-rule="nonzero"
							/>
						</svg>
					{/if}
					{#if !isSending && !isFormSent}
						{$LL.common.next()}
					{/if}
				</button>
			</div>
		</form>
	{:else}
		<div class="flex flex-col space-y-6">
			<p>{$LL.checkout.address.noAddress()}</p>
			<a href="{base}/{$locale}/account/dashboard/addresses/new" class="btn btn-primary"
				>{$LL.checkout.address.addAddress()}</a
			>
		</div>
	{/if}
</div>
