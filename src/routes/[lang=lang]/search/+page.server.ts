import medusa from '$lib/server/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ url }) {
	const q = url.searchParams?.get('q');
	const hits = q ? await medusa.getSearchResults(q) : null;
	return {
		hits
	};
};
