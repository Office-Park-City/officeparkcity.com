import fetch from 'isomorphic-fetch'

export const TOGGLE_SETTING = 'TOGGLE_SETTING'
export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT'
export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

// const baseUrl = process.env.NODE_ENV !== 'production' ? `http://localhost:8000/api-2017` : '/api-2017';

export function toggleSetting() {
    return {
        type: TOGGLE_SETTING,
    }
}

export function addToCart(product, quantity = 1) {

	const { slug } = product;

	return {
		type: ADD_TO_CART,
		product,
		quantity
	}
}

export function incrementProduct(slug) {
	return {
		type: INCREMENT_PRODUCT,
		slug
	}
}

export function decrementProduct(slug) {
	return {
		type: DECREMENT_PRODUCT,
		slug
	}
}

export function deleteProduct(slug) {
	return {
		type: DELETE_PRODUCT,
		slug
	}
}