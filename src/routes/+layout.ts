import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import type { CustomerInfos } from '../types/medusa';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad<{ locale: Locales }> = async ({
	data: { locale, user }
}): Promise<{ locale: Locales; user: CustomerInfos | undefined }> => {
	const localeValue = locale as Locales;
	await loadLocaleAsync(localeValue);
	dayjs.extend(LocalizedFormat);
	dayjs.locale(localeValue);
	return { locale: localeValue, user };
};
