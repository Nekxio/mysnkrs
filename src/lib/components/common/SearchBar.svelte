<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
</script>

<div class="flex flex-col items-center">
	<form
		action="?/search"
		method="post"
		class="flex w-full flex-row items-center rounded-full border-2 border-transparent bg-base-200 px-4 py-1"
	>
		<button type="submit"><SearchIcon /></button>
		<label>
			<input
				id="headerSearch"
				type="search"
				name="query"
				placeholder={$LL.header.search()}
				class="w-72 rounded-full border-none bg-base-200 p-1 outline-none"
			/>
		</label>
	</form>
</div>
