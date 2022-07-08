import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {products: [...state.products, {...action.payload, amount: 1}]}
    },
    removeFromCart: (state, action) => {
      return state.products.filter(product => product.id !== action.payload)
    },
    updateProductAmount: (state, action) => {
      return state.products.map(product => product.id === action.payload.id ?  {...product, amount: action.payload.amount} : product)
    },
    incrementProductAmount: (state, action) => {
      return state.products.map(product => product.id === action.payload ? {...product, amount: product.amount + 1} : product)
    },
    decrementProductAmount: (state, action) => {
      return state.products.map(product => product.id === action.payload ? {...product, amount: product.amount - 1} : product)
    }
  },
})

export const getProductsCart = state => state.cart

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateProductAmount } = cartSlice.actions

export default cartSlice.reducer