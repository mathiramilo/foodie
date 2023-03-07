import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as loginService, register as registerService, createUser, getUser } from '../services'

const initialUser = {
  id: 'G843-FMN3-3FND-F3TT',
  fullName: 'Steven Prosses',
  email: 'steven.prosses@gmail.com',
  phone: '+59896034908',
  imgUrl: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-64.png',
  favoriteRestaurants: ['Burger King']
}
const initialAddresses = [
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
]
const initialCards = [
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
]

const initialState = {
  user: null,
  addresses: [],
  cards: [],
  token: null,
  loading: false,
  error: null
}

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    await loginService(email, password)
    const user = await getUser(email)
    return user
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const register = createAsyncThunk('auth/register', async ({ email, password, user }, thunkAPI) => {
  try {
    await registerService(email, password)
    const userData = await createUser(user)
    return userData
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null
      state.addresses = []
      state.cards = []
      state.token = null
      state.loading = false
      state.error = null
    },
    resetError: state => {
      state.error = null
    }
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        // state.addresses = action.payload.addresses
        // state.cards = action.payload.cards
        // state.token = action.payload.token
        state.loading = false
        state.error = null
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      }),
      builder.addCase(register.pending, state => {
        state.loading = true
      }),
      builder.addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
        // state.addresses = action.payload.addresses
        // state.cards = action.payload.cards
        // state.token = action.payload.token
        state.loading = false
        state.error = null
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export const { logout, resetError } = authSlice.actions

export default authSlice.reducer
