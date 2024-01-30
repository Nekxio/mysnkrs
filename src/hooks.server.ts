import { base } from '$app/paths';
import type { Locales } from '$i18n/i18n-types.js';
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util';
import { loadAllLocales } from '$i18n/i18n-util.sync';
import medusa from '$lib/server/medusa';
import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { getPathnameWithoutBase } from './utils.js';

loadAllLocales();
const L = i18n();

export const handle: Handle = async ({ event, resolve }) => {
	event = await medusa.handleRequest(event);

	const [, lang] = getPathnameWithoutBase(event.url).split('/');

	if (!lang) {
		const locale = getPreferredLocale(event);

		throw redirect(307, `${base}/${locale}`);
	}

	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event);
	const LL = L[locale];

	event.locals.locale = locale;
	event.locals.LL = LL;

	const response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });

	// CACHE CONTROL
	// response.headers.set['Cache-Control'] = 'no-store, no-cache, must-revalidate, proxy-revalidate'
	// response.headers.set['Cache-Control'] = 'public, max-age=0, s-maxage=1'

	// SECURITY HEADERS
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set(
		'Permissions-Policy',
		'payment=(self "https://js.stripe.com/"), accelerometer=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(), gyroscope=(), hid=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()'
	);

	return response;
};

const getPreferredLocale = ({ request }: RequestEvent) => {
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);
	return detectLocale(acceptLanguageDetector);
};
