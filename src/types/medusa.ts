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
	orders: Order[];
}

export interface AddressInfos extends Address {
	id: string;
}

export interface OrderItem {
	allow_discounts: boolean;
	cart_id: string;
	claim_order_id: string | null;
	created_at: string;
	description: string;
	fulfilled_quantity: number | null;
	has_shipping: boolean;
	id: string;
	is_giftcard: boolean;
	is_return: boolean;
	metadata: Record<string, unknown>;
	order_edit_id: string | null;
	order_id: string;
	original_item_id: string | null;
	quantity: number;
	returned_quantity: number | null;
	shipped_quantity: number | null;
	should_merge: boolean;
	swap_id: string | null;
	thumbnail: string;
	title: string;
	unit_price: number;
	updated_at: string;
	variant_id: ProductVariant['id'];
	variant: ProductVariant;
}

export interface Payment {
	amount: number;
	amount_refunded: number;
	canceled_at: string | null;
	captured_at: string;
	cart_id: string;
	created_at: string;
	currency_code: string;
	data: Record<string, unknown>;
	id: string;
	idempotency_key: string | null;
	metadata: Record<string, unknown> | null;
	order_id: string;
	provider_id: string;
	swap_id: string | null;
	updated_at: string;
}

export interface Region {
	automatic_taxes: boolean;
	created_at: string;
	currency_code: string;
	deleted_at: string | null;
	gift_cards_taxable: boolean;
	id: string;
	metadata: Record<string, unknown> | null;
	name: string;
	tax_code: string | null;
	tax_provider_id: string | null;
	tax_rate: number;
	updated_at: string;
}

export interface ShippingOption {
	admin_only: boolean;
	amount: number;
	created_at: string;
	data: Record<string, unknown>;
	deleted_at: string | null;
	id: string;
	is_return: boolean;
	metadata: Record<string, unknown> | null;
	name: string;
	price_type: string;
	profile_id: string;
	provider_id: string;
	region_id: string;
	updated_at: string;
}

export interface TaxLine {
	code: string;
	created_at: string;
	id: string;
	metadata: Record<string, unknown> | null;
	name: string;
	rate: number;
	shipping_method_id: string;
	updated_at: string;
}

export interface ShippingMethod {
	id: string;
	shipping_option_id: string;
	order_id: string;
	claim_order_id: string | null;
	cart_id: string;
	original_tax_total: number;
	original_total: number;
	price: number;
	return_id: string | null;
	shipping_option: ShippingOption;
	subtotal: number;
	swap_id: string | null;
	tax_lines: TaxLine[];
	tax_total: number;
	total: number;
}

export interface Order {
	cart_id: string;
	created_at: string;
	currency_code: string;
	customer: Customer;
	customer_id: string;
	discount_total: number;
	discounts: [];
	display_id: number;
	email: string;
	fulfillment_status: string;
	fulfillments: [];
	gift_card_tax_total: number;
	gift_card_total: number;
	id: string;
	item_tax_total: number;
	items: OrderItem[];
	object: string;
	paid_total: number;
	payment_status: string;
	payments: Payment[];
	refundable_amount: number;
	refunded_total: number;
	region: Region;
	region_id: string;
	shipping_address: Address;
	shipping_methods: ShippingMethod[];
	shipping_tax_total: number;
	shipping_total: number;
	status: string;
	subtotal: number;
	tax_rate: number;
	tax_total: number;
	total: number;
}
