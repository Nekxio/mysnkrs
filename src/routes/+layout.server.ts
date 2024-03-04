import medusa from '$lib/server/medusa';
import type { CustomerDTO } from '@medusajs/types';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({
	locals,
	cookies
}): Promise<{ locale: string; user: CustomerDTO | undefined }> => {
	let user: CustomerDTO | undefined;
	const userData = await medusa.getCustomer(locals, cookies);
	userData ? (user = userData) : (user = undefined);
	const locale = locals.locale;
	return { locale, user };
};
