import { AUTH_LOGIN_URL, AUTH_REGISTER_URL } from '../firebase'

export const login = async (email, password) => {
  try {
    const response = await fetch(AUTH_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
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

export const register = async (email, password) => {
  try {
    const response = await fetch(AUTH_REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
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
