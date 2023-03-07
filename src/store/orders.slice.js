import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrdersFromUser } from '../services'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async ({ email }, thunkAPI) => {
  try {
    const orders = await getOrdersFromUser(email)
    return orders
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchOrders.pending, state => {
      state.loading = true
    }),
      builder.addCase(fetchOrders.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
        state.error = null
      }),
      builder.addCase(fetchOrders.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default ordersSlice.reducer
