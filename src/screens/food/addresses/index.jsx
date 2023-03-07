import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../../store/order.slice'

import { NavigationHeader } from '../../../components/common'
import { OrderResumeCTA } from '../../../components/food'

import theme from '../../../theme'
import { styles } from './styles'

const AddressesScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { addresses } = useSelector(state => state.auth)
  const { restaurant, items, total, address: orderAddress } = useSelector(state => state.order)

  return (
    <View style={styles.container}>
      <NavigationHeader text="Your Addresses" logoUrl={restaurant.logoUrl} />

      <View>
        {addresses.map((address, index) => (
          <TouchableOpacity key={index} onPress={() => dispatch(setAddress({ address }))}>
            <View
              style={[
                styles.addressItem,
                address.address === orderAddress?.address && { borderColor: theme.colors.primary }
              ]}
            >
              <View style={styles.addressData}>
                <View style={styles.addressDataTop}>
                  <Text style={styles.addressDataTopTitle}>{address.name}</Text>
                  <Text style={styles.addressDataTopTag}>{address.tag}</Text>
                </View>
                <Text style={styles.addressDataStreet}>{address.address}</Text>
              </View>

              {address.address === orderAddress?.address && (
                <MaterialCommunityIcons name="check-circle" size={24} color={theme.colors.primary} />
              )}
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.separatorBar}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Profile', { screen: 'AddAddress' })}>
          <View style={styles.addAddressBtn}>
            <Text style={styles.addAddressBtnIcon}>+</Text>
            <Text style={styles.addAddressBtnText}>Add a new address</Text>
          </View>
        </TouchableOpacity>
      </View>

      <OrderResumeCTA text="Checkout" total={total} navigateTo="Checkout" itemsLength={items.length} />
    </View>
  )
}

export default AddressesScreen
