<script lang="ts">
	import LL from '$i18n/i18n-svelte.js';
	import PhoneInput from '$lib/components/dashboard/PhoneInput.svelte';
	import { enhance } from '$app/forms';
	import type { Address, Customer } from 'sveltekit-medusa-client';
	import { authorizedCountries } from '$lib/constants';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';

	export let customer: Customer | undefined = undefined;
	export let address: Address | undefined = undefined;
	export let formType: 'updateProfile' | 'newAddress' | 'updateAddress' | 'billingAddress';

	let isSending: boolean = false;
	let isFormSent: boolean = false;
	let isError: boolean = false;
	let addressCountry: string = address ? address.country_code.toUpperCase() : '';
	let isCheckout: boolean = $page.url.pathname.includes('checkout');

	export let isFormValid: boolean = false;
	const dispatch = createEventDispatcher();

	function validateCheckoutBillingAddressForm() {
		if (browser) {
			const requiredInputs = Array.from(
				document.querySelectorAll(
					`form[name='billingAddress'] input[required], form[name='billingAddress'] select[required]`
				)
			);
			const isValid = requiredInputs.every((input) => {
				if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
					return input.value.trim() !== '';
				}
				return false;
			});
			if (isValid) {
				const allInputs = Array.from(
					document.querySelectorAll(`form[name='billingAddress'] input, form[name='billingAddress'] select`)
				);
				const formValues = allInputs.reduce((values: Record<string, string>, input) => {
					if ((input instanceof HTMLInputElement || input instanceof HTMLSelectElement) && input.name !== '') {
						values[input.name] = input.value;
					}
					return values;
				}, {});
				dispatch('formValid', (isFormValid = true));
				dispatch('formValues', formValues);
			} else {
				dispatch('formValid', (isFormValid = false));
			}
		}
	}
</script>

<form
	method="post"
	name={`${formType}`}
	action={`?/${formType}`}
	enctype="multipart/form-data"
	class="flex flex-col space-y-6 max-w-2xl"
	on:change={validateCheckoutBillingAddressForm}
	use:enhance={() => {
		isSending = true;
		return async ({ update, result }) => {
			await update({ reset: false });
			isSending = false;
			if (result && result.type === 'success') {
				isFormSent = true;
				setTimeout(() => {
					isFormSent = false;
				}, 2500);
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
	{#if formType === 'updateProfile'}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="w-full">
				<label for="first_name" class="label">
					<span class="label-text">{$LL.account.auth.firstName()}</span>
				</label>
				<input
					name="first_name"
					type="text"
					placeholder={$LL.account.auth.firstName()}
					class="input input-bordered w-full"
					value={customer?.first_name}
					required
				/>
			</div>
			<div class="w-full">
				<label for="last_name" class="label">
					<span class="label-text">{$LL.account.auth.lastName()}</span>
				</label>
				<input
					name="last_name"
					type="text"
					placeholder={$LL.account.auth.lastName()}
					class="input input-bordered w-full"
					value={customer?.last_name}
					required
				/>
			</div>
			<div class="w-full">
				<label for="email" class="label">
					<span class="label-text">{$LL.account.auth.email()}</span>
				</label>
				<input
					name="email"
					type="email"
					placeholder={$LL.account.auth.email()}
					class="input input-bordered w-full"
					value={customer?.email}
					required
				/>
			</div>
			<div>
				<PhoneInput phoneNumber={customer?.phone} />
			</div>
		</div>
	{/if}

	{#if formType === 'newAddress' || formType === 'updateAddress' || formType === 'billingAddress'}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="w-full">
				<label for="first_name" class="label">
					<span class="label-text">{$LL.account.auth.firstName()}</span>
				</label>
				<input
					name="first_name"
					type="text"
					placeholder={$LL.account.auth.firstName()}
					class="input input-bordered w-full"
					value={address ? address?.first_name : ''}
					required
				/>
			</div>
			<div class="w-full">
				<label for="last_name" class="label">
					<span class="label-text">{$LL.account.auth.lastName()}</span>
				</label>
				<input
					name="last_name"
					type="text"
					placeholder={$LL.account.auth.lastName()}
					class="input input-bordered w-full"
					value={address ? address.last_name : ''}
					required
				/>
			</div>
			<div>
				<PhoneInput phoneNumber={address ? address.phone : ''} />
			</div>
			<div class="w-full">
				<label for="company" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.company()}</span>
				</label>
				<input
					name="company"
					type="text"
					placeholder={$LL.account.dashboard.addresses.company()}
					class="input input-bordered w-full"
					value={address ? address.company : ''}
				/>
			</div>
			<div class="w-full col-span-2">
				<label for="address" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.address()}</span>
				</label>
				<input
					name="address_1"
					type="text"
					placeholder={$LL.account.dashboard.addresses.address()}
					class="input input-bordered w-full"
					value={address ? address.address_1 : ''}
					required
				/>
			</div>
			<div class="w-full col-span-2">
				<label for="address_complement" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.addressComplement()}</span>
				</label>
				<input
					name="address_2"
					type="text"
					placeholder={$LL.account.dashboard.addresses.addressComplementPlaceholder()}
					class="input input-bordered w-full"
					value={address ? address.address_2 : ''}
					required
				/>
			</div>
			<div class="w-full">
				<label for="postal_code" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.postalCode()}</span>
				</label>
				<input
					name="postal_code"
					type="text"
					placeholder={$LL.account.dashboard.addresses.postalCode()}
					class="input input-bordered w-full"
					value={address ? address.postal_code : ''}
					required
				/>
			</div>
			<div class="w-full">
				<label for="city" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.city()}</span>
				</label>
				<input
					name="city"
					type="text"
					placeholder={$LL.account.dashboard.addresses.city()}
					class="input input-bordered w-full"
					value={address ? address.city : ''}
					required
				/>
			</div>
			<div class="w-full">
				<label for="province" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.province()}</span>
				</label>
				<input
					name="province"
					type="text"
					placeholder={$LL.account.dashboard.addresses.province()}
					class="input input-bordered w-full"
					value={address ? address.province : ''}
					required
				/>
			</div>
			<div class="w-full">
				<label for="country_code" class="label">
					<span class="label-text">{$LL.account.dashboard.addresses.country()}</span>
				</label>
				<select class="select select-bordered w-full" name="country_code" bind:value={addressCountry} required>
					<option value="" selected disabled>{$LL.account.dashboard.addresses.selectCountry()}</option>
					{#each authorizedCountries as country}
						<option value={country.code}>{country.name}</option>
					{/each}
				</select>
			</div>
		</div>
	{/if}
	{#if !isCheckout}
		<div class="self-center lg:self-end flex flex-row items-center space-x-4">
			{#if isError}
				<p>{$LL.account.dashboard.error()}</p>
			{/if}
			<button type="submit" class="btn btn-primary w-fit flex flex-row space-x-2">
				{#if isSending}
					{$LL.account.dashboard.updateInProgress()}
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
					{$LL.account.dashboard.updateCompleted()}
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
					{#if formType === 'updateProfile' || (formType === 'updateAddress' && address)}
						{$LL.account.dashboard.update()}
					{:else}
						{$LL.account.dashboard.add()}
					{/if}
				{/if}
			</button>
		</div>
	{/if}
</form>
