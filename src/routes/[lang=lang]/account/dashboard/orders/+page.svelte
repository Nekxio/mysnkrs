<script lang="ts">
	import { base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
	import dayjs from 'dayjs';

	export let data;
	const { orders } = data;
</script>

<div class="lg:min-h-screen flex flex-col justify-center space-y-6">
	<h1 class="text-3xl font-bold">{$LL.account.dashboard.orders.title()}</h1>
	<p>{$LL.account.dashboard.orders.description()}</p>
	{#if orders.length}
		<div class="space-x-4 divide-y divide-base-content/20">
			{#each orders as order (order.id)}
				<div class="flex flex-col space-y-2 py-4">
					<div class="uppercase font-bold text-xl">#{order.display_id}</div>
					<div class="flex items-center divide-x divide-base-content/20 space-x-2">
						<p>{dayjs(order.created_at).format('DD/MM/YYYY')}</p>
						<p class="pl-2">{(order.total / 100).toFixed(2)} €</p>
						<p class="pl-2">{order.items.length} {$LL.account.dashboard.orders.items()}</p>
					</div>
					<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
						{#each order.items.slice(0, 3) as item (item.id)}
							<div class="flex flex-col p-2 space-y-2">
								<img src={item.thumbnail} alt={item.title} class="border rounded-xl max-w-52 h-full object-cover" />
								<div class="flex items-center text-small-regular">
									<span class="font-semibold">{item.title}</span>
									<span class="ml-2">x{item.quantity}</span>
								</div>
							</div>
						{/each}
						{#if order.items.length > 4}
							<div class="w-full h-full flex flex-col items-center justify-center">
								<p class="text-small-regular">
									+ {order.items.length - 4}
								</p>
								<p>{$LL.account.dashboard.orders.more()}</p>
							</div>
						{/if}
					</div>
					<div class="flex justify-center lg:justify-end">
						<a href="{base}/{$locale}/account/dashboard/orders/{order.id}">
							<button class="btn btn-primary">{$LL.account.dashboard.orders.seeDetails()}</button>
						</a>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="flex flex-col items-center space-y-4">
			<p class="font-bold">{$LL.account.dashboard.orders.emptyOrders()}</p>
			<p>{$LL.account.dashboard.orders.emptyOrdersDescription()}</p>
			<a href="{base}/{locale}/" class="btn btn-primary">{$LL.account.dashboard.orders.continueShopping()}</a>
		</div>
	{/if}
</div>
