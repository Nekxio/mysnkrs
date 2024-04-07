<script lang="ts">
	import type { ShippingOption } from '../../../../types/medusa.js';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
	import { enhance } from '$app/forms';
	export let data;
	const { shippingOptions } = data;

	let selectedOption: ShippingOption | undefined = undefined;

	let isError: boolean = false;
	let isSending: boolean = false;
	let isFormSent: boolean = false;

	const updateSelectedOption = (option: ShippingOption) => {
		selectedOption = option;
	};
</script>

<div class="space-y-6 transition-all h-full ease-in-out duration-500">
	<h2 class="text-2xl font-bold">{$LL.checkout.shipping.title()}</h2>
	<h3 class="text-lg font-bold">{$LL.checkout.shipping.chooseMethod()}</h3>
	<form
		method="post"
		name="updateCartAddresses"
		action="?/updateCartShippingOption"
		enctype="multipart/form-data"
		class="flex flex-col space-y-6 max-w-2xl"
		use:enhance={() => {
			isSending = true;
			return async ({ update, result }) => {
				await update({ reset: false });
				isSending = false;
				if (result && result.type === 'success') {
					isFormSent = true;
					await goto(`${base}/${$locale}/checkout/payment`);
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
		{#each shippingOptions as option}
			<div class="flex justify-between items-center">
				<label
					class="flex items-center justify-between rounded-lg py-8 px-6 border w-full cursor-pointer"
					class:bg-primary={selectedOption === option}
					class:text-base-100={selectedOption === option}
				>
					<span class="flex flex-col space-y-2">
						<span class="text-sm font-medium">{option.name}</span>
						<span class="text-sm"
							>{option.name.includes('Express')
								? $LL.checkout.shipping.express()
								: $LL.checkout.shipping.standard()}</span
						>
						<span class="font-bold">{option.amount / 100} €</span>
					</span>
					<input
						type="radio"
						name="shippingOption"
						class="radio radio-primary"
						value={option.id}
						on:change={() => updateSelectedOption(option)}
					/>
				</label>
			</div>
		{/each}

		<div class="flex flex-row items-center space-x-4">
			{#if isError}
				<p>{$LL.account.dashboard.error()}</p>
			{/if}
			<button type="submit" class="btn btn-primary w-fit flex flex-row space-x-2" disabled={!selectedOption}>
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
</div>
