import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  HomeScreen,
  RestaurantScreen,
  DetailScreen,
  OrderScreen,
  CheckoutScreen,
  PaymentScreen,
  CardsScreen,
  AddressesScreen
} from '../../screens/food'

const Stack = createNativeStackNavigator()

const FoodNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="Addresses" component={AddressesScreen} />
    </Stack.Navigator>
  )
}

export default FoodNavigator
