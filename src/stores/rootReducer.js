import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import productsReducer from './menu/productsSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
});

export default rootReducer;