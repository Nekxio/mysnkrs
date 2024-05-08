<script lang="ts">
	import DashboardForm from '$lib/components/dashboard/DashboardForm.svelte';
	import LL from '$i18n/i18n-svelte';

	export let data;
	const { customer } = data;
	const formType = 'updateProfile';
</script>

<div class="lg:min-h-screen flex flex-col justify-center space-y-6">
	<h1 class="text-3xl font-bold">{$LL.account.dashboard.profile.title()}</h1>
	<p>{$LL.account.dashboard.profile.description()}</p>
	<DashboardForm {customer} {formType} />
</div>
