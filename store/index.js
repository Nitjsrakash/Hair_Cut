// import {createStore} from 'redux'
// import cartItem from '../reducers/cartItem'

// // console.log("Store :",cartItem)
// export default store = createStore(cartItem);

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
const middleware = [thunk];
const initialState = {};
export default createStore(rootReducer, initialState, applyMiddleware(...middleware));