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
      throw new Error('Invalid credentials')
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

    const data = await response.json()

    if (!response.ok) {
      const { message } = data.error

      if (message === 'EMAIL_EXISTS') {
        throw new Error('Email already exists')
      }
      if (message === 'INVALID_EMAIL') {
        throw new Error('Please enter a valid email')
      }
      if (message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
        throw new Error('Password should be at least 6 characters')
      }

      throw new Error(message)
    }

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
