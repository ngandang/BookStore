// src/redux/reducers/cartReducer.ts
import { Product } from "../../common/models/product";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartAction";

interface CartItem extends Product {
	quantity: number;
}

interface CartState {
	cartItems: CartItem[];
}

const initialState: CartState = {
	cartItems: [],
};

interface Action {
	type: string;
	payload?: any;
}

const cartReducer = (state = initialState, action: Action): CartState => {
	switch (action.type) {
		case ADD_TO_CART: {
			const exist = state.cartItems.find(item => item.id === action.payload.id);
			if (exist) {
				return {
					...state,
					cartItems: state.cartItems.map(item =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}
			return {
				...state,
				cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
			};
		}
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload),
			};
		case CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
