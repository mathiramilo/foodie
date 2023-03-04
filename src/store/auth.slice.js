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
  addresses: [
    {
      name: 'Steven Prosses',
      address: '4536 Northwest Boulevard, NY',
      phone: '+59896034908',
      tag: 'Home'
    },
    {
      name: 'Steven Prosses',
      address: '9005 Great St, CHI',
      phone: '+59896034908',
      tag: 'Work'
    }
  ],
  cards: [
    {
      cardNumber: '590392339283920003900',
      cardHolder: 'Steven Prosses',
      expirationDate: '06/25',
      cvv: '288'
    },
    {
      cardNumber: '490780339283920009932',
      cardHolder: 'Steven Prosses',
      expirationDate: '09/27',
      cvv: '900'
    }
  ],
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
      state.addresses = []
      state.paymentMethods = []
      state.token = null
    }
  }
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer
