import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  selected: null
}

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getRestaurants: async (state, action) => {}
  }
})

export const { getOrders } = restaurantsSlice.actions

export default restaurantsSlice.reducer
