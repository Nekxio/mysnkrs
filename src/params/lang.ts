import { isLocale } from '$i18n/i18n-util';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return isLocale(param);
};
