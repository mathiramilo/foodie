import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

import { useDispatch } from 'react-redux'
import { fetchRestaurants } from '../../store/restaurants.slice'

import FoodNavigator from './food'
import OrdersNavigator from './orders'
import ProfileNavigator from './profile'

import theme from '../../theme'

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  return (
    <Tab.Navigator
      initialRouteName="Food"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    >
      <Tab.Screen
        name="Food"
        component={FoodNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="fastfood" size={28} color={focused ? theme.colors.primary : theme.colors.gray} />
          )
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="concierge-bell" size={28} color={focused ? theme.colors.primary : theme.colors.gray} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="person" size={28} color={focused ? theme.colors.primary : theme.colors.gray} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.white,
    borderTopWidth: 0,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: theme.colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 5
  },
  tabBarLabel: {
    fontFamily: theme.fonts.type.semiBold
  }
})

export default TabsNavigator
