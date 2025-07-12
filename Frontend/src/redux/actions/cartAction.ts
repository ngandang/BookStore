// src/redux/actions/cartAction.ts
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

import type { Product } from "../../common/models/product";

export const addToCart = (product: Product) => ({
	type: ADD_TO_CART,
	payload: product,
});

export const removeFromCart = (productId: number) => ({
	type: REMOVE_FROM_CART,
	payload: productId,
});

export const clearCart = () => ({
	type: CLEAR_CART,
});
