<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/common/Header.svelte';
	import HeadHrefLangs from '$lib/components/common/HeadHrefLangs.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
</script>

<Header />
<main class="container mx-auto px-6 space-y-10 flex flex-col gap-y-10 md:space-y-16 lg:px-0">
	<slot />
</main>
<Footer />

<svelte:head>
	<title>{'MySnkrs - ' + $page.data.title || 'MySnkrs'}</title>
	<HeadHrefLangs />
</svelte:head>
