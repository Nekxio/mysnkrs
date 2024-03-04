<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="h-screen flex flex-col items-center justify-center space-y-10">
	<div class="flex flex-col items-center space-y-2">
		<p class="font-bold text-2xl">{$page.status}</p>
		<p class="text-xl">{$page.error?.message}</p>
	</div>
	<a href="{base}/" class="btn btn-primary">Retour à l'accueil</a>
</div>
