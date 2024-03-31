import { writable } from 'svelte/store';
import type { Checkout } from '../types/medusa';

export const checkoutStore = writable<Checkout>();
