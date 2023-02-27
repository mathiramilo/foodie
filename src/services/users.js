import { REALTIME_DB_URL } from '../firebase'

export const getUser = async email => {
  try {
    const response = await fetch(`${REALTIME_DB_URL}/users.json?equalTo="${email}"`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createUser = async payload => {
  try {
    const response = fetch(`${REALTIME_DB_URL}/users.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(data.error.message)
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
