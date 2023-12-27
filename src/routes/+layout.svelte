<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/common/Header.svelte';
	import HeadHrefLangs from '$lib/components/common/HeadHrefLangs.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<svelte:head>
	<title>{'MySnkrs - ' + $page.data.title || 'MySnkrs'}</title>
	<HeadHrefLangs />
</svelte:head>
