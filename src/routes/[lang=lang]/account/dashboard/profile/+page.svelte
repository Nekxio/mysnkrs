<script lang="ts">
	import DashboardForm from '$lib/components/dashboard/DashboardForm.svelte';

	export let data;
	const { customer } = data;
	const formType = 'Profile';
</script>

<DashboardForm {customer} {formType} />
