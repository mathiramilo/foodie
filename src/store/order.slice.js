import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: null,
  items: [],
  total: 0,
  address: null,
  paymentType: '',
  card: null
}

const isItemInOrder = (items, item) => items.some(orderItem => orderItem.item.name === item.name)

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.restaurant === null) state.restaurant = action.payload.restaurant

      if (isItemInOrder(state.items, action.payload.item)) {
        state.items = state.items.map(orderItem => {
          if (orderItem.item.name === action.payload.item.name) {
            orderItem.qty = orderItem.qty + 1
          }
          return orderItem
        })
      } else {
        state.items.push({ item: action.payload.item, qty: 1 })
      }

      state.total = state.total + action.payload.item.price
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.item.name === action.payload.item.name)

      state.items = state.items.filter(item => item.item.name !== action.payload.item.name)

      state.total = state.total - itemToRemove.item.price * itemToRemove.qty
    },
    decreaseItem: (state, action) => {
      const itemToDecrease = state.items.find(item => item.item.name === action.payload.item.name)

      if (itemToDecrease.qty > 1) {
        state.items = state.items.map(item => {
          if (item.item.name === action.payload.item.name) {
            item.qty = item.qty - 1
          }
          return item
        })
      }

      state.total = state.total - itemToDecrease.item.price
    },
    increaseItem: (state, action) => {
      const itemToIncrease = state.items.find(item => item.item.name === action.payload.item.name)

      state.items = state.items.map(item => {
        if (item.item.name === action.payload.item.name) {
          item.qty = item.qty + 1
        }
        return item
      })

      state.total = state.total + itemToIncrease.item.price
    },
    clearOrder: state => {
      state.restaurant = null
      state.items = []
      state.total = 0
      state.address = null
      state.paymentType = ''
      state.card = null
    },
    setAddress: (state, action) => {
      state.address = action.payload.address
    },
    setPaymentType: (state, action) => {
      state.paymentType = action.payload.paymentType
    },
    setCard: (state, action) => {
      state.card = action.payload.card
    }
  }
})

export const { addItem, removeItem, decreaseItem, increaseItem, clearOrder, setAddress, setPaymentType, setCard } =
  orderSlice.actions

export default orderSlice.reducer
