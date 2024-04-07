<script lang="ts">
	import LL from '$i18n/i18n-svelte';

	export let data;
	const { medusaCart } = data;

	let cart = medusaCart;
	$: cart = data.medusaCart;
</script>

<section>
	<div class="flex flex-row justify-between min-h-[60vh] pt-6 gap-x-10">
		<div class="flex flex-col space-y-6 min-h-[50vh]">
			<slot />
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
