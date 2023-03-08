import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  login as loginService,
  register as registerService,
  createUser,
  getUser,
  updateUser as updateUserService,
  addFavoriteRestaurant as addFavoriteRestaurantService,
  removeFavoriteRestaurant as removeFavoriteRestaurantService
} from '../services'
import {
  getUserAddresses,
  getUserCards,
  insertAddress,
  updateAddress,
  deleteAddress,
  insertCard,
  updateCard,
  deleteCard
} from '../db'

import { deleteData, getData, storeData } from '../utils'

const initialState = {
  user: null,
  addresses: [],
  cards: [],
  loading: false,
  error: null
}

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

      deleteData('user')
      deleteData('addresses')
      deleteData('cards')
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
        state.user = action.payload.user
        state.addresses = action.payload.addresses
        state.cards = action.payload.cards
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
        state.loading = false
        state.error = null
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      }),
      builder.addCase(updateUser.pending, state => {
        state.loading = true
      }),
      builder.addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      }),
      builder.addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      }),
      builder.addCase(addAddress.fulfilled, (state, action) => {
        state.addresses = [...state.addresses, action.payload]
        storeData('addresses', state.addresses)
      }),
      builder.addCase(editAddress.fulfilled, (state, action) => {
        const id = action.payload.id
        const address = action.payload.address

        const index = state.addresses.findIndex(a => a.id === id)
        state.addresses[index] = address

        storeData('addresses', state.addresses)
      }),
      builder.addCase(removeAddress.fulfilled, (state, action) => {
        const id = action.payload
        state.addresses = state.addresses.filter(a => a.id !== id)

        storeData('addresses', state.addresses)
      }),
      builder.addCase(addCard.fulfilled, (state, action) => {
        state.cards = [...state.cards, action.payload]
        storeData('cards', state.cards)
      }),
      builder.addCase(editCard.fulfilled, (state, action) => {
        const id = action.payload.id
        const card = action.payload.card

        const index = state.cards.findIndex(c => c.id === id)
        state.cards[index] = card

        storeData('cards', state.cards)
      }),
      builder.addCase(removeCard.fulfilled, (state, action) => {
        const id = action.payload
        state.cards = state.cards.filter(c => c.id !== id)

        storeData('cards', state.cards)
      }),
      builder.addCase(addFavoriteRestaurant.fulfilled, (state, action) => {
        state.user.favorites = action.payload
      }),
      builder.addCase(removeFavoriteRestaurant.fulfilled, (state, action) => {
        state.user.favorites = action.payload
      }),
      builder.addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.addresses = action.payload.addresses
        state.cards = action.payload.cards
      })
  }
})

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    await loginService(email, password)
    const user = await getUser(email)

    const addressesResult = await getUserAddresses(user.email)
    const addresses = addressesResult?.rows?._array

    const cardsResult = await getUserCards(user.email)
    const cards = cardsResult?.rows?._array

    storeData('user', user)
    storeData('addresses', addresses)
    storeData('cards', cards)

    return { user, addresses, cards }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const register = createAsyncThunk('auth/register', async ({ email, password, user }, thunkAPI) => {
  try {
    await registerService(email, password)
    const userData = await createUser(user)

    storeData('user', userData)

    return userData
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const updateUser = createAsyncThunk('auth/updateUser', async ({ email, userData }, thunkAPI) => {
  try {
    const updatedUser = await updateUserService(email, userData)
    return updatedUser
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addFavoriteRestaurant = createAsyncThunk(
  'auth/addFavoriteRestaurant',
  async ({ email, restaurant }, thunkAPI) => {
    try {
      const favorites = await addFavoriteRestaurantService(email, restaurant)
      return favorites
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const removeFavoriteRestaurant = createAsyncThunk(
  'auth/removeFavoriteRestaurant',
  async ({ email, restaurant }, thunkAPI) => {
    try {
      const favorites = await removeFavoriteRestaurantService(email, restaurant)
      return favorites
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addAddress = createAsyncThunk('auth/addAddress', async ({ email, address }, thunkAPI) => {
  try {
    const result = await insertAddress(email, address)

    const newAddress = {
      id: result.insertId,
      ...address
    }

    return newAddress
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const editAddress = createAsyncThunk('auth/updateAddress', async ({ id, address }, thunkAPI) => {
  try {
    await updateAddress(id, address)

    return { id, address }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const removeAddress = createAsyncThunk('auth/deleteAddress', async ({ id }, thunkAPI) => {
  try {
    await deleteAddress(id)

    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addCard = createAsyncThunk('auth/addCard', async ({ email, card }, thunkAPI) => {
  try {
    const result = await insertCard(email, card)

    const newCard = {
      id: result.insertId,
      ...card
    }

    return newCard
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const editCard = createAsyncThunk('auth/updateCard', async ({ id, card }, thunkAPI) => {
  try {
    await updateCard(id, card)

    return { id, card }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const removeCard = createAsyncThunk('auth/deleteCard', async ({ id }, thunkAPI) => {
  try {
    await deleteCard(id)

    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const loadUser = createAsyncThunk('auth/loadUser', async (_, thunkAPI) => {
  try {
    const user = await getData('user')
    const addresses = (await getData('addresses')) || []
    const cards = (await getData('cards')) || []

    return { user, addresses, cards }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const { logout, resetError } = authSlice.actions

export default authSlice.reducer
