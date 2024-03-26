<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import type { CustomerInfos } from '../../../../types/medusa';
	import dayjs from 'dayjs';
	import { base } from '$app/paths';

	const user = $page.data.user;

	function calculateCompletionPercentage(user: CustomerInfos): string {
		let totalFields: number = 0;
		let filledFields: number = 0;

		const keys = Object.keys(user) as (keyof CustomerInfos)[];

		keys.forEach((customerInfoKey) => {
			totalFields++;
			if (user[customerInfoKey] !== undefined && user[customerInfoKey] !== '') {
				filledFields++;
			}
		});

		return ((filledFields / totalFields) * 100).toFixed(0);
	}
</script>

<div class="lg:min-h-screen flex flex-col justify-center space-y-6">
	<div class="flex flex-col lg:flex-row justify-between items-center pb-4 border-b">
		<h1 class="text-3xl font-bold">{$LL.account.dashboard.hello()} {user.first_name}</h1>
		<p>{$LL.account.dashboard.signedInAs()}: {user.email}</p>
	</div>
	<div class="flex flex-row">
		<div class="w-1/2">
			<p class="mb-2">{$LL.account.dashboard.profile.title()}</p>
			<p class="text-3xl font-bold">{calculateCompletionPercentage(user)}%</p>
			<p>{$LL.account.dashboard.completed()}</p>
		</div>
		<div class="w-1/2">
			<p class="mb-2">{$LL.account.dashboard.addresses.title()}</p>
			<p class="text-3xl font-bold">{user.shipping_addresses.length}</p>
			<p>{$LL.account.dashboard.savedAddresses()}</p>
		</div>
	</div>
	<div class="flex flex-row">
		<div class="space-y-6 w-full">
			<p class="font-bold">{$LL.account.dashboard.recentOrders()}</p>
			{#each user.orders.slice(0, 1) as order (order.id)}
				<a
					href="{base}/{$locale}/account/dashboard/orders/{order.id}"
					class="flex flex-row transition-all items-center ease-in-out duration-500 justify-between rounded-xl bg-base-200/30 gap-4 p-4 hover:bg-base-200/60"
				>
					<div>
						<p class="text-sm">{$LL.account.dashboard.orders.details.orderNumber()}</p>
						<p class="text-sm">#{order.display_id}</p>
					</div>
					<div>
						<p class="text-sm">{$LL.account.dashboard.orders.details.orderDate()}</p>
						<p class="text-sm">{dayjs(order.created_at).format('DD/MM/YYYY')}</p>
					</div>
					<div>
						<p class="text-sm">{$LL.account.dashboard.orders.details.total()}</p>
						<p class="text-sm">{(order.total / 100).toFixed(2)} €</p>
					</div>
					<p>></p>
				</a>
			{/each}
		</div>
	</div>
</div>
