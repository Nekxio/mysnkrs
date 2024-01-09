import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import type { LayoutLoad } from './$types';
export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale } }) => {
	await loadLocaleAsync(locale);
	dayjs.extend(LocalizedFormat);
	dayjs.locale(locale);
	return { locale };
};
