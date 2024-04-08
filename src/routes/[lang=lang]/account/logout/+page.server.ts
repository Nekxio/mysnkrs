import { base } from '$app/paths';
import medusa from '$lib/server/medusa';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies, params }) => {
	const success = await medusa
		.query({
			locals,
			path: '/store/auth',
			method: 'DELETE'
		})
		.then((res) => res?.ok)
		.catch(() => false);
	if (!success) return false;
	locals.sid = '';
	locals.user = undefined;
	cookies.delete('sid', { path: `/${base}/${params.lang}` });
	redirect(302, `${base}/${params.lang}`);
};
