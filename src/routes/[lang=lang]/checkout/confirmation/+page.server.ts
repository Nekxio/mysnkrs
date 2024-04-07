import medusa from '$lib/server/medusa';
import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/[lang=lang]/checkout/shipping/$types';

export const load: PageServerLoad = async ({ locals }) => {
	await medusa.completeCart(locals);
};
