import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const uploadImage = async uri => {
  const storageRef = ref(storage, `users/avatars/${uri.split('/').pop()}`)

  const response = await fetch(uri)
  const blob = await response.blob()

  await uploadBytes(storageRef, blob)

  const downloadUrl = await getDownloadURL(storageRef)

  return downloadUrl
}
