import { stripeApiKey } from '$lib/env';
import { loadStripe, type Stripe } from '@stripe/stripe-js';

export const stripe = async (): Promise<Stripe | null> => {
	return await loadStripe(stripeApiKey);
};
