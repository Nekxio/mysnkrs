<script>
	import LL from '$i18n/i18n-svelte';
	import CheckIcon from '$lib/components/icons/CheckIcon.svelte';
</script>

<div class="space-y-6 transition-all h-ful flex flex-col items-center ease-in-out duration-500">
	<h2 class="text-2xl font-bold">{$LL.checkout.confirmation.title()}</h2>
	<h3 class="text-lg font-bold">{$LL.checkout.confirmation.thanks()}</h3>
	<div class="fill-primary w-20"><CheckIcon /></div>
</div>
