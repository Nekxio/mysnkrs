<script lang="ts">
	import DashboardForm from '$lib/components/dashboard/DashboardForm.svelte';
	import LL from '$i18n/i18n-svelte';

	const formType = 'newAddress';
</script>

<div class="lg:min-h-screen flex flex-col justify-center space-y-6">
	<h1 class="text-3xl font-bold">{$LL.account.dashboard.addresses.newAddress()}</h1>
	<DashboardForm {formType} />
</div>
