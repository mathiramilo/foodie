import { db } from '../firebase'
import { child, ref, set, get } from 'firebase/database'

export const getUser = async email => {
  try {
    const key = email.split('@')[0]

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
    const key = user.email.split('@').join('_')

    set(ref(db, `users/${key}`), user)

    return user
  } catch (error) {
    throw new Error(error.message)
  }
}
