import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return [...state.products, action.payload]
    },
    removeFromCart: (state, action) => {
      return state.products.filter(product => product.id !== action.payload)
    },
    updateProductAmount: (state, action) => {
      return state.products.map(product => product.id === action.payload.id ?  {...product, amount: action.payload.amount} : product)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateProductAmount } = cartSlice.actions

export default cartSlice.reducer