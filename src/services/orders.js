import { REALTIME_DB_URL } from '../firebase'

export const getOrders = async () => {
  try {
    const response = await fetch(`${REALTIME_DB_URL}/orders.json`)

    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createOrder = async order => {
  try {
    const response = await fetch(`${REALTIME_DB_URL}/orders.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })

    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
