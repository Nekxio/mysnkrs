<script lang="ts">
	import { assets, base } from '$app/paths';
	import LL, { locale } from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import HeartIcon from '$lib/components/icons/HeartIcon.svelte';
	import ShoppingCartIcon from '$lib/components/icons/ShoppingCartIcon.svelte';
	import HamburgerIcon from '$lib/components/icons/HamburgerIcon.svelte';
	import ThemeSwitcher from '$lib/components/common/ThemeSwitcher.svelte';
	import type { Cart, CustomerInfos } from '../../../types/medusa';
	import SearchBar from '$lib/components/common/SearchBar.svelte';

	export let user: CustomerInfos | undefined;
	export let cart: Cart | undefined;
</script>

<header class="navbar sticky top-0 z-30 bg-base-100 p-4">
	<div class="navbar-start">
		<div class="dropdown lg:hidden">
			<div tabindex="0" role="button" class="m-1 btn btn-ghost">
				<HamburgerIcon />
			</div>
			<ul class="dropdown-content menu z-[1] p-2 shadow bg-base-200 rounded-box w-52">
				<li>
					<a href="{base}/{$locale}/sneakers">{$LL.header.sneakers()}</a>
				</li>
				<li>
					<a href="{base}/{$locale}/artists">{$LL.header.artists()}</a>
				</li>
				<li>
					<a href="{base}/{$locale}/contact">{$LL.header.contact()}</a>
				</li>
			</ul>
		</div>
		<a href="{base}/{$locale}" class="btn btn-ghost hidden lg:flex">
			<img src="{assets}/images/logo_mysnkrs.svg" alt="MySnkrs logo" class="h-full" />
		</a>
		<nav class="menu hidden lg:flex">
			<ul class="menu-horizontal">
				<li>
					<a href="{base}/{$locale}/sneakers">{$LL.header.sneakers()}</a>
				</li>
				<li>
					<a href="{base}/{$locale}/artists">{$LL.header.artists()}</a>
				</li>
				<li>
					<a href="{base}/{$locale}/contact">{$LL.header.contact()}</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="navbar-center lg:hidden">
		<a href="{base}/{$locale}" class="btn btn-ghost">
			<img src="{assets}/images/logo_mysnkrs.svg" alt="MySnkrs logo" class="h-full" />
		</a>
	</div>
	<div class="navbar-center hidden lg:block">
		<SearchBar />
	</div>
	<div class="navbar-end gap-x-3">
		<div class="hidden lg:flex">
			<ThemeSwitcher />
		</div>
		<LocaleSwitcher />
		{#if user}
			<button class="btn btn-circle btn-ghost hidden lg:flex">
				<span class="indicator">
					<HeartIcon />
				</span>
			</button>

			<div class="dropdown dropdown-hover dropdown-end">
				<div class="m-1 btn btn-ghost btn-circle">
					<span class="indicator">
						<ShoppingCartIcon />
						<span class="badge indicator-item badge-sm badge-primary">{cart?.items?.length || 0}</span>
					</span>
				</div>
				<div class="dropdown-content z-[1] card card-compact w-52 p-2 shadow bg-base-200 text-primary-content">
					<div class="card-body">
						<span class="text-lg font-bold text-base-content"
							>{cart?.items?.length || 0} {$LL.account.dashboard.orders.items()}</span
						>
						<span class="text-base-content"
							>{$LL.account.dashboard.orders.details.subtotal()}: {(cart && (cart.subtotal / 100).toFixed(2)) || 0}
							€</span
						>
						<div class="card-actions">
							<a href="{base}/{$locale}/cart" class="btn btn-primary btn-block">{$LL.header.cart()}</a>
						</div>
					</div>
				</div>
			</div>
			<div class="dropdown dropdown-hover dropdown-end">
				<div class="avatar btn btn-circle btn-ghost">
					<span class="w-10">
						<img src="https://picsum.photos/200" alt="profile" class="rounded-full" />
					</span>
				</div>
				<ul class="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
					<li>
						<a href="{base}/{$locale}/account" class="justify-between">{$LL.header.account()}</a>
					</li>
					<li>
						<a href="{base}/{$locale}/account/dashboard/orders">{$LL.header.orders()}</a>
					</li>
					<li>
						<a href="{base}/{$locale}/account/dashboard/addresses">{$LL.header.addresses()}</a>
					</li>
					<li>
						<a href="{base}/{$locale}/account/logout">{$LL.header.logout()}</a>
					</li>
				</ul>
			</div>
		{:else}
			<a href="{base}/{$locale}/account" class="btn btn-primary">{$LL.header.login()}</a>
		{/if}
	</div>
</header>
