import type { MoneyAmountDTO, ProductDTO, ProductVariantDTO } from '@medusajs/types';
export interface Product extends ProductDTO {
	variants: ProductVariant[];
}

export interface ProductVariant extends ProductVariantDTO {
	prices: MoneyAmountDTO[];
}
