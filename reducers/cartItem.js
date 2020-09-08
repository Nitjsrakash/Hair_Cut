const cartItem = (state = [] ,action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            return [...state , action.payload]
        case 'REMOVE_FROM_CART':
            // return state.filter(cartItem => cartItem.id !== action.payload.id)
            const cartItem = state.findIndex(cartItem => cartItem.id === action.payload.id);
            return state.filter((_, i) => i !== cartItem);
                }
    return state;
}

export default cartItem;

