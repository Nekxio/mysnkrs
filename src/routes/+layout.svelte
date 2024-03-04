<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/common/Header.svelte';
	import HeadHrefLangs from '$lib/components/common/HeadHrefLangs.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	export let data;
	const { user } = data;

	console.log(user);
</script>

<Header {user} />
<main class="container mx-auto flex flex-col px-10 space-y-10 md:space-y-16 lg:px-0">
	<slot />
</main>
<Footer />

<svelte:head>
	<title>{'MySnkrs - ' + $page.data.title || 'MySnkrs'}</title>
	<HeadHrefLangs />
</svelte:head>
