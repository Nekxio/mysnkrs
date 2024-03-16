<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutsideAction } from 'svelte-tel-input/utils';
	import { isSelected, normalizedCountries, TelInput } from 'svelte-tel-input';
	import type {
		DetailedValue,
		CountrySelectEvents,
		CountryCode,
		E164Number,
		TelInputOptions,
		Country
	} from 'svelte-tel-input/types';
	import 'svelte-tel-input/styles/flags.css';
	import LL from '$i18n/i18n-svelte';
	import { authorizedCountries } from '$lib/constants';
	export let phoneNumber: string | null | undefined;
	let clickOutside = true;
	let closeOnClick = true;
	let disabled = false;
	let detailedValue: DetailedValue | null = null;
	let value: E164Number = phoneNumber || '';
	let selectedCountry: CountryCode | null;
	let valid: boolean;
	let options: TelInputOptions;
	let searchText = '';
	let isOpen = false;

	$: selectedCountryDialCode = normalizedCountries.find((el) => el.iso2 === selectedCountry)?.dialCode || null;
	$: value == '' && (selectedCountry = 'FR');
	console.log(value);
	const toggleDropDown = (e?: Event) => {
		e?.preventDefault();
		if (disabled) return;
		isOpen = !isOpen;
	};

	const closeDropdown = (e?: Event) => {
		if (isOpen) {
			e?.preventDefault();
			isOpen = false;
			searchText = '';
		}
	};

	const selectClick = () => {
		if (closeOnClick) closeDropdown();
	};

	const closeOnClickOutside = () => {
		if (clickOutside) {
			closeDropdown();
		}
	};

	const sortCountries = (countries: Country[], text: string) => {
		const normalizedText = text.trim().toLowerCase();
		if (!normalizedText) {
			return countries.sort((a, b) => a.label.localeCompare(b.label));
		}
		return countries.sort((a, b) => {
			const aNameLower = a.name.toLowerCase();
			const bNameLower = b.name.toLowerCase();
			const aStartsWith = aNameLower.startsWith(normalizedText);
			const bStartsWith = bNameLower.startsWith(normalizedText);
			if (aStartsWith && !bStartsWith) return -1;
			if (!aStartsWith && bStartsWith) return 1;
			const aIndex = aNameLower.indexOf(normalizedText);
			const bIndex = bNameLower.indexOf(normalizedText);
			if (aIndex === -1 && bIndex === -1) return a.id.localeCompare(b.id);
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			const aWeight = aIndex + (aStartsWith ? 0 : 1);
			const bWeight = bIndex + (bStartsWith ? 0 : 1);
			return aWeight - bWeight;
		});
	};

	const handleSelect = (val: CountryCode, e?: Event) => {
		if (disabled) return;
		e?.preventDefault();
		if (selectedCountry === null || (typeof selectedCountry === typeof val && selectedCountry !== val)) {
			selectedCountry = val;
			onChange(val);
			selectClick();
		} else {
			dispatch('same', { option: val });
			selectClick();
		}
	};

	const dispatch = createEventDispatcher<CountrySelectEvents<CountryCode>>();

	const onChange = (selectedCountry: CountryCode) => {
		dispatch('change', { option: selectedCountry });
	};
</script>

<label for="phone_number" class="label">
	<span class="label-text">{$LL.account.auth.phoneNumber()}</span>
</label>

<div
	class="flex relative rounded-lg join {valid
		? ``
		: ` ring-pink-500 dark:ring-pink-500 ring-1 focus-within:ring-offset-1 focus-within:ring-offset-pink-500/50 focus-within:ring-1`}"
>
	<div class="flex join item" use:clickOutsideAction={closeOnClickOutside}>
		<button
			id="states-button"
			data-dropdown-toggle="dropdown-states"
			class="select select-bordered w-full max-w-xs join-item items-center"
			type="button"
			role="combobox"
			aria-controls="dropdown-countries"
			aria-expanded="false"
			aria-haspopup="false"
			on:click={toggleDropDown}
		>
			{#if selectedCountry && selectedCountry !== null}
				<span class="inline-flex items-center text-left">
					<span class="flag flag-{selectedCountry.toLowerCase()} flex-shrink-0 mr-3" />
					{#if options}
						<span class=" text-gray-600 dark:text-gray-400">+{selectedCountryDialCode}</span>
					{/if}
				</span>
			{:else}
				{$LL.account.dashboard.selectCountry()}
			{/if}
		</button>
		{#if isOpen}
			<div
				id="dropdown-countries"
				class="absolute z-10 max-w-fit bg-base-100 rounded-xl divide-y divide-gray-100 shadow overflow-hidden translate-y-14"
				data-popper-reference-hidden=""
				data-popper-escaped=""
				data-popper-placement="bottom"
				aria-orientation="vertical"
				aria-labelledby="country-button"
				tabindex="-1"
			>
				<div class="text-sm max-h-48 overflow-y-auto" aria-labelledby="countries-button" role="listbox">
					<input
						aria-autocomplete="list"
						type="text"
						class="p-4 bg-base-200 focus:outline-none w-full sticky top-0"
						bind:value={searchText}
						placeholder={$LL.account.dashboard.search()}
					/>
					{#each sortCountries( normalizedCountries.filter( (country) => authorizedCountries.some((authCountry) => authCountry.code === country.iso2) ), searchText ) as country (country.id)}
						{@const isActive = isSelected(country.iso2, selectedCountry)}
						<div id="country-{country.iso2}" role="option" aria-selected={isActive}>
							<button
								value={country.iso2}
								type="button"
								class="inline-flex py-2 px-4 w-full text-sm hover:bg-gray-100 dark:hover:bg-gray-600
                             active:bg-gray-800 dark:active:bg-gray-800 overflow-hidden
                            {isActive ? 'bg-base-200 dark:bg-base-300' : 'bg-base-100'}"
								on:click={(e) => {
									handleSelect(country.iso2, e);
								}}
							>
								<span class="inline-flex items-center text-left">
									<span class="flag flag-{country.iso2.toLowerCase()} flex-shrink-0 mr-3" />
									<span class="mr-2">{country.name}</span>
									<span class="text-gray-500 dar:text-gray-200">+{country.dialCode}</span>
								</span>
							</button>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<TelInput
		bind:country={selectedCountry}
		bind:detailedValue
		bind:value
		bind:valid
		options={{ ...options, invalidateOnCountryChange: true }}
		class="join-item input input-bordered w-full"
	/>
</div>

<label for="phone_number">
	<input type="hidden" name="phone_number" value={`${value}`} />
</label>
