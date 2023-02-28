import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getRestaurants } from '../services'

const initialState = {
  items: [],
  selected: null
}

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
  const restaurants = await getRestaurants()
  return restaurants
})

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    selectRestaurant: (state, action) => {
      state.selected = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.items = action.payload
    })
  }
})

export const { selectRestaurant } = restaurantsSlice.actions

export default restaurantsSlice.reducer
