import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import theme from '../../../theme'
import { styles } from './styles'

const OrderItem = ({ order }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { order })}>
      <View style={styles.container}>
        <View style={styles.orderData}>
          <Image style={styles.orderDataImg} resizeMode="contain" source={{ uri: order.restaurantData.logoUrl }} />
          <View style={styles.orderDataContent}>
            <View style={styles.orderDataTop}>
              <Text style={styles.orderDataTopTitle}>{order.restaurantData.name}</Text>
              <Text style={styles.orderDataTopSubtitle}>{order.address.address}</Text>
            </View>
            <View style={styles.orderDataBottom}>
              <Text style={styles.orderDataBottomPrice}>${order.total.toFixed(2)}</Text>
              <Text style={styles.orderDataBottomPayment}>{order.payment}</Text>
            </View>
          </View>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.black} />
      </View>
    </TouchableOpacity>
  )
}

export default OrderItem
