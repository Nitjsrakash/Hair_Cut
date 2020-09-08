import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../action/types';
const initialState = {
    cart: [],
    total: 0,
}
export default function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: parseInt(state.total) + parseInt(action.payload.dis_price)
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
             const index = state.cart.findIndex(cart => cart.id === action.payload.id);
            return {
                    ...state,
                    cart: state.cart.filter((_, i) => i !== index),
                    total: parseInt(state.total) - parseInt(action.payload.dis_price)
            }
        default:
            return state
    }
}