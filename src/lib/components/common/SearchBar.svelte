<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';

	let value: string;
</script>

<div class="flex flex-col items-center">
	<div class="flex w-full flex-row items-center rounded-full border-2 border-transparent bg-base-200 px-4 py-1">
		<SearchIcon />
		<input
			id="headerSearch"
			type="search"
			placeholder={$LL.header.search()}
			class="w-72 rounded-full border-none bg-base-200 p-1 outline-none"
			bind:value
		/>
	</div>
</div>
