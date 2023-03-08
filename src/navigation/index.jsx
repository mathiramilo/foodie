import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../store/auth.slice'

import AuthNavigator from './auth'
import TabsNavigator from './tabs'

const AppNavigator = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return <NavigationContainer>{!user ? <AuthNavigator /> : <TabsNavigator />}</NavigationContainer>
}

export default AppNavigator
