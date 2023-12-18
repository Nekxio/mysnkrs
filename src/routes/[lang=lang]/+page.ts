import { i18nObject } from '$i18n/i18n-util.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { locale } = await parent();
	const LL = i18nObject(locale);

	return {
		title: LL.title({ year: 2024 })
	};
};
