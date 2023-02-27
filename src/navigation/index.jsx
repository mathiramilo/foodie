import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import AuthNavigator from './auth'
import TabsNavigator from './tabs'

const AppNavigator = () => {
  // const user = useSelector(state => state.auth.user)

  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
