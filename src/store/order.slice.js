import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: null,
  items: []
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    clearOrder: state => {
      state.restaurant = null
      state.items = []
    }
  }
})

export const { addItem, removeItem, clearOrder } = orderSlice.actions

export default orderSlice.reducer
