import medusa from '$lib/server/medusa';
import Stripe from 'stripe';
import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/[lang=lang]/checkout/shipping/$types';
import type { Cart } from '../../../../types/medusa';

const stripe = new Stripe(
	'sk_test_51P2roM13JH6VtHrNWgrLeqbEMfCC45cxXc1O1cH0unWdTLfoZfec2bp08HB47QPLWB23aB4qwK5v30wScvaLJFHY00ZNOfL9OA'
);
export const load: PageServerLoad = async ({ locals, cookies, params }) => {
	const cart: Cart = await medusa.getCart(locals, cookies);
	console.log(cart.shipping_methods);
	const locale: 'fr' | 'en' = params.lang === 'fr' ? 'fr' : 'en';
	await medusa.createPaymentSessions(locals);
	const session = await stripe.checkout.sessions.create({
		ui_mode: 'embedded',
		locale: locale,
		line_items: [
			...cart.items.map((item) => ({
				price_data: {
					currency: 'eur',
					product_data: {
						name: item.title,
						description: item.variant.title
					},
					unit_amount: item.unit_price
				},
				quantity: item.quantity
			})),
			{
				price_data: {
					currency: 'eur',
					product_data: {
						name: 'Livraison',
						description: `Frais de livraison pour ${cart.shipping_methods && cart.shipping_methods[0].shipping_option.name}`
					},
					unit_amount: cart.shipping_total
				},
				quantity: 1
			},
			{
				price_data: {
					currency: 'eur',
					product_data: {
						name: 'Taxes'
					},
					unit_amount: cart.tax_total
				},
				quantity: 1
			}
		],
		mode: 'payment',
		return_url: `http://localhost:3000/${params.lang}/checkout/confirmation`
	});

	return {
		clientSecret: session.client_secret
	};
};
