import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: 'G843-FMN3-3FND-F3TT',
    fullName: 'Steven Prosses',
    email: 'steven.prosses@gmail.com',
    phone: '+59896034908',
    imgUrl: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-64.png',
    favoriteRestaurants: ['Burger King']
  },
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    register: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: state => {
      state.user = null
      state.token = null
    }
  }
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer
