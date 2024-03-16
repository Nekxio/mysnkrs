<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { authorizedCountries } from '$lib/constants';

	export let data;
	const { addresses } = data;

	const getCountryName = (code: string) => {
		const country = authorizedCountries.find((c) => c.code === code.toUpperCase());
		return country ? country.name : code.toUpperCase();
	};
</script>

<div class="lg:min-h-screen flex flex-col justify-center space-y-6">
	<h1 class="text-3xl font-bold">{$LL.account.dashboard.addresses.title()}</h1>
	<p>{$LL.account.dashboard.addresses.description()}</p>
	<div class="grid grid-cols-3 gap-4">
		{#if addresses && addresses.length > 0}
			{#each addresses as address}
				<a
					href="{base}/{$locale}/account/dashboard/addresses/{address.id}"
					class="card w-auto min-h-52 bg-base-100 shadow-xl scale-95 hover:scale-100 rounded-xl transition-all ease-in-out duration-500"
				>
					<div class="card-body space-y-1">
						<p class="card-title capitalize col-span-2 text-clip">{address.first_name} {address.last_name}</p>
						{#if address.company}
							<p class="capitalize col-span-2 text-clip">{address.company}</p>
						{:else}
							<div></div>
						{/if}
						<div class="grid grid-cols-2 gap-1 items-center">
							<p class="col-span-2 text-sm text-clip">{address.address_1}</p>
							{#if address.address_2}
								<p class="col-span-2 text-sm text-clip">{address.address_2}</p>
							{:else}
								<div class="col-span-2"></div>
							{/if}
							<p class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap">{address.postal_code}</p>
							<p class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap">{address.city}</p>
							<p class="capitalize col-span-1 text-sm overflow-hidden text-clip text-nowrap">{address.province}</p>
							<p class="capitalize col-span-1 text-sm text-clip text-nowrap">{getCountryName(address.country_code)}</p>
						</div>
					</div>
				</a>
			{/each}
		{/if}
		<a
			href="{base}/{$locale}/account/dashboard/addresses/new"
			class="card w-auto min-h-52 bg-base-100 shadow-xl scale-95 hover:scale-100 rounded-xl transition-all ease-in-out duration-500"
		>
			<div class="card-body justify-between">
				<h2 class="card-title">{$LL.account.dashboard.addresses.newAddress()}</h2>
				<div class="card-actions justify-end">
					<svg
						clip-rule="evenodd"
						fill-rule="evenodd"
						stroke-linejoin="round"
						stroke-miterlimit="2"
						viewBox="0 0 24 24"
						class="w-10"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
							fill-rule="nonzero"
						/>
					</svg>
				</div>
			</div>
		</a>
	</div>
</div>
