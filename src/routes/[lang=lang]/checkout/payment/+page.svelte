<script lang="ts">
	import { EmbeddedCheckout } from 'svelte-stripe';
	import { stripe } from '$lib/stripe';
	import LL from '$i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import type { Stripe } from '@stripe/stripe-js';

	export let data;
	const { clientSecret } = data;
	let stripeData: Stripe | null;
	onMount(async () => {
		stripeData = await stripe();
	});
</script>

<div class="space-y-6 transition-all h-full ease-in-out duration-500">
	<h2 class="text-2xl font-bold">{$LL.checkout.payment.title()}</h2>

	{#if clientSecret !== null && stripeData}
		<div class="w-full">
			<EmbeddedCheckout stripe={stripeData} {clientSecret} />
		</div>
	{/if}
</div>
