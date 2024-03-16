import type { MoneyAmountDTO, ProductDTO, ProductVariantDTO } from '@medusajs/types';
import type { Address, Customer } from 'sveltekit-medusa-client';
export interface Product extends ProductDTO {
	variants: ProductVariant[];
}

export interface ProductVariant extends ProductVariantDTO {
	prices: MoneyAmountDTO[];
}

export interface CustomerInfos extends Customer {
	shipping_addresses: Address[];
}

export interface AddressInfos extends Address {
	id: string;
}
