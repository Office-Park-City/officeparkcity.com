import initialState from '../initialState';

import {
    TOGGLE_SETTING,
    ADD_TO_CART,
    DELETE_PRODUCT,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT
} from '../actions/actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_SETTING:
            return Object.assign({}, state, {
                setting: !state.setting
            });

        case DELETE_PRODUCT:

            const deleteItemIndex = state.cart.findIndex( item => item.product.slug === action.slug );

            if ( deleteItemIndex === -1 ){ return state }

            return Object.assign({}, state, {
                cart: [
                    ...state.cart.slice(0, deleteItemIndex),
                    ...state.cart.slice(deleteItemIndex + 1)
                ]
            });

        case ADD_TO_CART:

            const addItemIndex = state.cart.findIndex( item => item.product.slug === action.product.slug );

            // merge quantities if item exists in cart
            if ( addItemIndex !== -1 ){

                return Object.assign({}, state, {
                    cart: [
                        ...state.cart.slice(0, addItemIndex),
                        {
                            product: state.cart[addItemIndex].product,
                            quantity: state.cart[addItemIndex].quantity + action.quantity
                        },
                        ...state.cart.slice(addItemIndex + 1)
                    ]
                });
            }

	        return Object.assign({}, state, {
	            cart: [...state.cart, {
                    product: action.product,
                    quantity: action.quantity
                }]
	        });

        case INCREMENT_PRODUCT:

            const incItemIndex = state.cart.findIndex( item => item.product.slug === action.slug );

            return Object.assign({}, state, {
                cart: [
                    ...state.cart.slice(0, incItemIndex),
                    {
                        product: state.cart[incItemIndex].product,
                        quantity: state.cart[incItemIndex].quantity + 1
                    },
                    ...state.cart.slice(incItemIndex + 1)
                ]
            });

        case DECREMENT_PRODUCT:

            const decItemIndex = state.cart.findIndex( item => item.product.slug === action.slug );

            return Object.assign({}, state, {
                cart: [
                    ...state.cart.slice(0, decItemIndex),
                    {
                        product: state.cart[decItemIndex].product,
                        quantity: state.cart[decItemIndex].quantity - 1
                    },
                    ...state.cart.slice(decItemIndex + 1)
                ]
            });

        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
