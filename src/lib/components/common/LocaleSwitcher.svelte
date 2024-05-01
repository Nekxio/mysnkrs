<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../../../utils';
	import GlobeIcon from '$lib/components/icons/GlobeIcon.svelte';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		await loadLocaleAsync(newLocale);

		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		await invalidateAll();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl($page.url, lang));
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<div class="dropdown dropdown-hover">
	<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
		<GlobeIcon />
	</div>
	<div
		class="dropdown-content z-[1] shadow bg-base-200 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 rounded-box"
	>
		<ul class="menu gap-2">
			{#each locales as l}
				<li>
					<a
						class:active={l === $locale}
						href={replaceLocaleInUrl($page.url, l)}
						class="btn btn-ghost btn-sm uppercase"
					>
						{l}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
