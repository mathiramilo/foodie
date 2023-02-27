import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  HomeScreen,
  AddressesScreen,
  AddAddressScreen,
  ManageAddressScreen,
  CardsScreen,
  AddCardScreen,
  ManageCardScreen,
  InformationScreen,
  ManageInformationScreen
} from '../../screens/profile'

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Addresses" component={AddressesScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      <Stack.Screen name="ManageAddress" component={ManageAddressScreen} />
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="ManageCard" component={ManageCardScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="ManageInformation" component={ManageInformationScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
