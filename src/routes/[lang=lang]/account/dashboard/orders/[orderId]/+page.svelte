<script lang="ts">
	import dayjs from 'dayjs';
	import LL from '$i18n/i18n-svelte';

	export let data;
	const { order } = data;
</script>

<div class="lg:min-h-screen flex flex-col justify-center space-y-6 divide-y divide-base-content/20">
	<div class="flex flex-col justify-center space-y-3">
		<h1 class="text-3xl font-bold">{$LL.account.dashboard.orders.details.title()}</h1>
		<p>{$LL.account.dashboard.orders.details.emailConfirmation()}: {order.email}</p>
		<p>{$LL.account.dashboard.orders.details.orderNumber()}: {order.display_id}</p>
		<p>{$LL.account.dashboard.orders.details.orderDate()}: {dayjs(order.created_at).format('DD/MM/YYYY')}</p>
	</div>
	<div class="flex flex-col divide-y divide-base-content/20 space-y-3 pt-6">
		{#each order.items as item (item.id)}
			<div class="flex flex-row justify-between items-center">
				<div class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-x-10">
					<img src={item.thumbnail} alt={item.title} class="border rounded-xl max-w-24 h-full object-cover" />
					<div class="flex flex-col justify-center">
						<p class="font-semibold">{item.title}</p>
						<p class="">{item.variant.title}</p>
					</div>
				</div>
				<div class="flex flex-col items-end space-y-2">
					<span class="text-neutral/60">{item.quantity}x {(item.unit_price / 100).toFixed(2)} €</span>
					<span class="font-bold">{((item.unit_price * item.quantity) / 100).toFixed(2)} €</span>
				</div>
			</div>
		{/each}
	</div>
	<div class="pt-6 space-y-3">
		<h2 class="text-3xl font-bold">{$LL.account.dashboard.orders.details.delivery()}</h2>
		<div class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row justify-between">
			<div>
				<p class="mb-2 font-bold">{$LL.account.dashboard.orders.details.shippingAddress()}</p>
				<p>{order.shipping_address.first_name} {order.shipping_address.last_name}</p>
				<p>{order.shipping_address.address_1}</p>
				<p>{order.shipping_address.address_2}</p>
				<p>{order.shipping_address.postal_code}, {order.shipping_address.city}</p>
				<p class="uppercase">{order.shipping_address.country_code}</p>
			</div>
			<div>
				<p class="mb-2 font-bold">{$LL.account.dashboard.orders.details.contact()}</p>
				<p>{order.shipping_address.phone}</p>
				<p>{order.email}</p>
			</div>
			<div>
				<p class="mb-2 font-bold">{$LL.account.dashboard.orders.details.shippingMethod()}</p>
				<p>{order.shipping_methods[0].shipping_option.name} ({(order.shipping_methods[0].price / 100).toFixed(2)} €)</p>
			</div>
		</div>
	</div>
	<div class="pt-6 space-y-3">
		<h3 class="font-bold">{$LL.account.dashboard.orders.details.orderSummary()}</h3>
		<div class="flex flex-row justify-between">
			<p>{$LL.account.dashboard.orders.details.subtotal()}</p>
			<p>{(order.subtotal / 100).toFixed(2)} €</p>
		</div>
		<div class="flex flex-row justify-between">
			<p>{$LL.account.dashboard.orders.details.shipping()}</p>
			<p>{(order.shipping_total / 100).toFixed(2)} €</p>
		</div>
		<div class="flex flex-row justify-between">
			<p>{$LL.account.dashboard.orders.details.taxes()}</p>
			<p>{(order.tax_total / 100).toFixed(2)} €</p>
		</div>
		<div class="border-dashed border" />
		<div class="flex flex-row justify-between">
			<p>{$LL.account.dashboard.orders.details.total()}</p>
			<p>{(order.total / 100).toFixed(2)} €</p>
		</div>
	</div>
	<div class="pt-6 space-y-3">
		<p>{$LL.account.dashboard.orders.details.needHelp()}</p>
		<p>{$LL.account.dashboard.orders.details.contact()}</p>
		<p>{$LL.account.dashboard.orders.details.returnExchanges()}</p>
	</div>
</div>
