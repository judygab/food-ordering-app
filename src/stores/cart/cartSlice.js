import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //return {products: [...state.products, {...action.payload, amount: 1}]}
      return {products: [...state.products , {...action.payload, amount: 1}]}
    },
    clearCart: (state) => {
      return {products: []}
    },
    removeFromCart: (state, action) => {
      return { products: state.products.filter(product => product.id !== action.payload)}
    },
    incrementProductAmount: (state, action) => {
      return { products: state.products.map(product => product.id === action.payload ? {...product, amount: product.amount + 1} : product)}
    },
    decrementProductAmount: (state, action) => {
      return { products: state.products.map(product => product.id === action.payload ? {...product, amount: product.amount - 1} : product)}
    }
  },
})

export const getProductsCart = state => state.cart
export const cartProducts = state => state.cart.products

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, removeFromCart, updateProductAmount, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer