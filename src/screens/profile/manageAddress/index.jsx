import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { Input, NavigationHeader } from '../../../components/common'

import theme from '../../../theme'
import { styles } from './styles'

const ManageAddressScreen = ({ route, navigation }) => {
  const { address } = route.params

  const [newAddress, setNewAddress] = useState({
    name: address.name,
    address: address.address,
    tag: address.tag,
    phone: address.phone
  })

  const handleDelete = () => {}

  const handleSave = () => {}

  return (
    <View style={styles.container}>
      <NavigationHeader text="Manage Address" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Input
            label="Name"
            value={newAddress.name}
            onChangeText={text => setNewAddress(prev => ({ ...prev, name: text }))}
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
            value={newAddress.address}
            onChangeText={text => setNewAddress(prev => ({ ...prev, address: text }))}
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
            value={newAddress.tag}
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
            value={newAddress.phone}
            onChangeText={text => setAddress(prev => ({ ...prev, phone: text }))}
            placeholder="Enter your phone"
            placeholderTextColor={theme.colors.black}
            keyboardType="number-pad"
            autoCorrect={false}
          />
        </View>

        <View style={styles.separatorBar}></View>

        <TouchableOpacity onPress={handleDelete}>
          <View style={styles.deleteBtn}>
            <Text style={styles.deleteBtnText}>Delete</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave}>
          <View style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ManageAddressScreen
