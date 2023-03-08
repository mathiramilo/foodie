import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useSelector } from 'react-redux'

import { NavigationHeader } from '../../../components/common'

import theme from '../../../theme'
import { styles } from './styles'

const AddressesScreen = ({ navigation }) => {
  const { addresses } = useSelector(state => state.auth)

  return (
    <View style={styles.container}>
      <NavigationHeader text="Your Addresses" />

      <ScrollView>
        <View>
          {addresses?.map((address, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('ManageAddress', { address })}>
              <View style={styles.addressItem}>
                <View style={styles.addressData}>
                  <View style={styles.addressDataTop}>
                    <Text style={styles.addressDataTopTitle}>{address.name}</Text>
                    <Text style={styles.addressDataTopTag}>{address.tag}</Text>
                  </View>
                  <Text style={styles.addressDataStreet}>{address.address}</Text>
                </View>

                <MaterialCommunityIcons name="dots-vertical" size={24} color={theme.colors.gray} />
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.separatorBar}></View>

          <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
            <View style={styles.addAddressBtn}>
              <Text style={styles.addAddressBtnIcon}>+</Text>
              <Text style={styles.addAddressBtnText}>Add a new address</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddressesScreen
