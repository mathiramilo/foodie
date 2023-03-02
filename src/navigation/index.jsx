import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../store/restaurants.slice'

import AuthNavigator from './auth'
import TabsNavigator from './tabs'

const AppNavigator = () => {
  const dispatch = useDispatch()

  // const user = useSelector(state => state.auth.user)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
