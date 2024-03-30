import { writable } from 'svelte/store';
import type { Product } from '../types/medusa';

export const productsStore = writable<Product[]>([]);
