import { base } from '$app/paths';
import medusa from '$lib/server/medusa';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, locals, cookies }) => {
	const isLogin = await medusa.getCustomer(locals, cookies);
	if (!isLogin) {
		redirect(302, `${base}/${params.lang}/account/auth`);
	}
};
