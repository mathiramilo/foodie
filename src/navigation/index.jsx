import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import AuthNavigator from './auth'
import TabsNavigator from './tabs'

const AppNavigator = () => {
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    console.log(user)
  }, [user])

  return <NavigationContainer>{!user ? <AuthNavigator /> : <TabsNavigator />}</NavigationContainer>
}

export default AppNavigator
