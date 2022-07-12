import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import productsReducer from './menu/productsSlice';
import addressReducer from './userInfo/addressSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    address: addressReducer,
});

export default rootReducer;