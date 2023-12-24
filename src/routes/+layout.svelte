<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { setLocale } from '$i18n/i18n-svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/components/common/Header.svelte';
	import HeadHrefLangs from '$lib/components/common/HeadHrefLangs.svelte';
	export let data: LayoutData;
	setLocale(data.locale);
</script>

<Header />
<main>
	<slot />
</main>

<svelte:head>
	<title>{'MySnkrs - ' + $page.data.title || 'MySnkrs'}</title>
	<HeadHrefLangs />
</svelte:head>
