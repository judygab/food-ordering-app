import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  status: 'idle',
  error: null
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { getProducts } = productsSlice.actions

export default productsSlice.reducer

export const selectAllProducts = state => state.products.products

export const fetchProducts = createAsyncThunk('products/fetchPosts', async () => {
    const response = await fetch('http://localhost:8080/api/products-by-categories')
    const data = await response.json()
    return data
  })