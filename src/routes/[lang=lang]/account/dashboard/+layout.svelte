<script>
	import { base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
</script>

<div
	class="lg:min-h-screen flex flex-col lg:px-20 lg:flex-row lg:justify-between space-y-6 lg:space-y-0 lg:space-x-20 items-center"
>
	<aside class="items-center flex">
		<ul class="flex flex-row justify-between lg:flex-col lg:space-y-4 items-start">
			<li>
				<a href="{base}/{$locale}/account/dashboard/" class="btn btn-ghost text-left">
					{$LL.account.dashboard.overview()}
				</a>
			</li>
			<li>
				<a href="{base}/{$locale}/account/dashboard/profile" class="btn btn-ghost text-left text-nowrap">
					{$LL.account.dashboard.profile.title()}
				</a>
			</li>
			<li>
				<a href="{base}/{$locale}/account/dashboard/addresses" class="btn btn-ghost text-left text-nowrap">
					{$LL.account.dashboard.addresses.title()}
				</a>
			</li>
			<li class="hidden lg:block">
				<a href="{base}/{$locale}/account/dashboard/orders" class="btn btn-ghost text-left text-nowrap">
					{$LL.account.dashboard.orders.title()}
				</a>
			</li>
		</ul>
	</aside>
	<div class="w-full">
		<slot />
	</div>
</div>
