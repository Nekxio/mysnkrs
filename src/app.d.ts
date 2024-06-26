import type { Cart, CustomerInfos } from './types/medusa';

type Locales = import('$i18n/i18n-types').Locales;
type TranslationFunctions = import('$i18n/i18n-types').TranslationFun;

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: Locales;
			LL: TranslationFunctions;
			sid: string;
			cartid: string;
			user: CustomerInfos | undefined;
			cart: Cart;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
