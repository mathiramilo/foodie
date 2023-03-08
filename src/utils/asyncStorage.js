import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.log(error.message)
  }
}

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error.message)
  }
}
