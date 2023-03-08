import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../../../store/auth.slice'

import { Input, NavigationHeader } from '../../../components/common'

import { styles } from './styles'
import theme from '../../../theme'

const AddAddressScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const [address, setAddress] = useState({
    name: '',
    address: '',
    tag: '',
    phone: ''
  })

  const handleSave = () => {
    if (!address.name || !address.address || !address.tag || !address.phone) {
      return Alert.alert('Error', 'Please fill all the fields', [{ text: 'OK' }], {
        userInterfaceStyle: 'light'
      })
    }

    dispatch(addAddress({ email: user.email, address }))
    navigation.navigate('Addresses')
  }

  return (
    <View style={styles.container}>
      <NavigationHeader text="Add new Address" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Input
            label="Name"
            value={address.name}
            onChangeText={text => setAddress(prev => ({ ...prev, name: text }))}
            placeholder="Enter your name"
            placeholderTextColor={theme.colors.black}
            autoCapitalize="words"
            autoComplete="name"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Address"
            value={address.address}
            onChangeText={text => setAddress(prev => ({ ...prev, address: text }))}
            placeholder="Enter your address"
            placeholderTextColor={theme.colors.black}
            autoComplete="street-address"
            autoCorrect={false}
          />
        </View>

        <View style={styles.addressPinPoint}>
          <View style={styles.addressPinPointLeft}>
            <MaterialIcons name="location-on" size={24} color={theme.colors.black} />
            <Text style={styles.addressPinPointLeftText}>Add pin point</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.black} />
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Tag"
            value={address.tag}
            onChangeText={text => setAddress(prev => ({ ...prev, tag: text }))}
            placeholder="Enter a tag for this address"
            placeholderTextColor={theme.colors.black}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Phone"
            value={address.phone}
            onChangeText={text => setAddress(prev => ({ ...prev, phone: text }))}
            placeholder="Enter your phone"
            placeholderTextColor={theme.colors.black}
            keyboardType="number-pad"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity onPress={handleSave}>
          <View style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default AddAddressScreen
