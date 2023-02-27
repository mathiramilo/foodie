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
    }
  }
})

export const { addItem, removeItem } = orderSlice.actions

export default orderSlice.reducer
