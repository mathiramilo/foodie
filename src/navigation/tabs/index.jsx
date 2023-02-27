import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FoodNavigator from './food'
import OrdersNavigator from './orders'
import ProfileNavigator from './profile'

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Food" component={FoodNavigator} />
      <Tab.Screen name="Orders" component={OrdersNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default TabsNavigator
