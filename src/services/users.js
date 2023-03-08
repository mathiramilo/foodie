import { db } from '../firebase'
import { child, ref, set, get } from 'firebase/database'

export const getUser = async email => {
  try {
    const key = email.split('.').join('-')

    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, `users/${key}`))

    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      throw new Error('There is no user with this email')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createUser = async user => {
  try {
    const key = user.email.split('.').join('-')

    set(ref(db, `users/${key}`), user)

    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const updateUser = async (email, userData) => {
  try {
    const key = email.split('.').join('-')

    set(ref(db, `users/${key}`), userData)

    return userData
  } catch (error) {
    throw new Error(error.message)
  }
}

export const addFavoriteRestaurant = async (email, restaurant) => {
  try {
    const key = email.split('.').join('-')

    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, `users/${key}`))

    if (snapshot.exists()) {
      const user = snapshot.val()
      const favorites = user.favorites || []

      const newFavorites = [...favorites, restaurant]

      set(ref(db, `users/${key}`), { ...user, favorites: newFavorites })

      return newFavorites
    } else {
      throw new Error('There is no user with this email')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const removeFavoriteRestaurant = async (email, restaurant) => {
  try {
    const key = email.split('.').join('-')

    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, `users/${key}`))

    if (snapshot.exists()) {
      const user = snapshot.val()
      const favorites = user.favorites || []

      const newFavorites = favorites.filter(favorite => favorite !== restaurant)

      set(ref(db, `users/${key}`), { ...user, favorites: newFavorites })

      return newFavorites
    } else {
      throw new Error('There is no user with this email')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
