import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

const OrderResumeCTA = ({ text, total, navigateTo, handlePlaceOrder, itemsLength }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    if (handlePlaceOrder) {
      handlePlaceOrder()
    } else {
      navigation.navigate(navigateTo)
    }
  }

  return (
    <View style={styles.orderResume}>
      <View style={styles.orderResumePrice}>
        <Text style={styles.orderResumePriceText}>Total order:</Text>
        <Text style={styles.orderResumePriceAmount}>${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.orderResumeCTA}>
          <Text style={styles.orderResumeCTAText}>{text}</Text>
          <View style={styles.orderResumeCTAQty}>
            <Text style={styles.orderResumeCTAQtyText}>{itemsLength}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default OrderResumeCTA
