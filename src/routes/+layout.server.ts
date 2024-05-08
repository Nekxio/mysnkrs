import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async function ({ locals }) {
	return {
		locale: locals.locale,
		user: locals.user,
		cart: locals.cart
	};
};
