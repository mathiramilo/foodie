import { REALTIME_DB_URL } from '../firebase'

export const getOrdersFromUser = async email => {
  try {
    const response = await fetch(`${REALTIME_DB_URL}/orders.json`)

    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await response.json()

    return data ? Object.values(data).filter(order => order.userId === email) : []
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createOrder = async order => {
  try {
    await fetch(`${REALTIME_DB_URL}/orders.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })

    return order
  } catch (error) {
    throw new Error(error.message)
  }
}
