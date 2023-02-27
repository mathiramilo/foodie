import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  selected: null
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrders: async (state, action) => {}
  }
})

export const { getOrders } = ordersSlice.actions

export default ordersSlice.reducer
