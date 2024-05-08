<script>
	import LL from '$i18n/i18n-svelte';
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/icons/InstagramIcon.svelte';
	import TikTokIcon from '$lib/components/icons/TikTokIcon.svelte';
	import { assets } from '$app/paths';
</script>

<footer class="mt-20 bg-neutral">
	<div class="flex w-full justify-center px-10 py-6 md:justify-start">
		<a href="/">
			<img src="{assets}/images/logo_mysnkrs.svg" alt="Logo MySnkrs" class="w-28" />
		</a>
	</div>
	<div class="footer justify-center px-10 py-6 md:justify-between">
		<div class="flex w-full flex-col items-center md:items-start">
			<span class="footer-title text-white">{$LL.footer.usefulLinks()}</span>
			<a href="/" class="link link-hover text-white">{$LL.footer.artists()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.collections()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.concept()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.customerReviews()}</a>
		</div>
		<div class="flex w-full flex-col items-center md:items-start">
			<span class="footer-title text-white">{$LL.footer.brands()}</span>
			<a href="/" class="link link-hover text-white">Nike</a>
			<a href="/" class="link link-hove text-white">Adidas</a>
			<a href="/" class="link link-hover text-white">Vans</a>
			<a href="/" class="link link-hover text-white">New Balance</a>
		</div>
		<div class="flex w-full flex-col items-center md:items-start">
			<span class="footer-title text-white">{$LL.footer.information()}</span>
			<a href="/" class="link link-hover text-white">{$LL.footer.legal()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.terms()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.conditions()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.cookies()}</a>
		</div>
		<div class="flex w-full flex-col items-center md:items-start">
			<span class="footer-title text-white">{$LL.footer.help()}</span>
			<a href="/" class="link link-hover text-white">{$LL.footer.orderStatus()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.shipping()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.returns()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.payment()}</a>
			<a href="/" class="link link-hover text-white">{$LL.footer.contactUs()}</a>
		</div>
	</div>
	<div class="footer flex flex-col-reverse items-center px-10 py-4 md:flex-row text-white">
		<div class="w-full">
			<p class="text-center md:text-start">MySNKRS — Copyright © 2024 - {$LL.footer.allRightsReserved()}</p>
		</div>
		<div class="flex w-full flex-row items-center justify-center gap-4 md:justify-end">
			<p class="font-bold">{$LL.footer.follow()}</p>
			<div class="flex flex-row gap-x-4">
				<a href="/">
					<InstagramIcon css="w-6 fill-current" />
				</a>
				<a href="/">
					<TikTokIcon css="w-6 fill-current" />
				</a>
				<a href="/">
					<FacebookIcon css="w-6" />
				</a>
			</div>
		</div>
	</div>
</footer>
