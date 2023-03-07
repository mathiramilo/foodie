import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { NavigationHeader } from '../../../components/common'

import { styles } from './styles'

const DetailScreen = ({ navigation, route }) => {
  const { order } = route.params

  return (
    <View style={styles.container}>
      <NavigationHeader text="Order" logoUrl={order.restaurantData.logoUrl} />

      <ScrollView style={styles.order} showsVerticalScrollIndicator={false}>
        {/* Address */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Address</Text>

          <View style={styles.addressSelected}>
            <View style={styles.addressSelectedData}>
              <Text style={styles.addressSelectedTitle}>{order.address.name}</Text>
              <Text style={styles.addressSelectedStreet}>{order.address.address}</Text>
            </View>

            <View style={styles.addressSelectedRight}>
              <View style={styles.addressSelectedTag}>
                <Text style={styles.addressSelectedTagText}>{order.address.tag}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Discount Code */}
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>No coupon added</Text>
          <Text style={styles.discountQty}>Discount: $0.00</Text>
        </View>

        {/* Payment Method */}
        <View>
          <View style={styles.paymentContainer}>
            {order.payment === 'Credit/Debit Card' ? (
              <View style={styles.paymentOption}>
                <MaterialCommunityIcons name="credit-card-outline" size={24} color={theme.colors.black} />
                <Text style={styles.paymentOptionText}>Credit/Debit Card</Text>
              </View>
            ) : (
              <View style={styles.paymentOption}>
                <MaterialCommunityIcons name="cash" size={24} color={theme.colors.black} />
                <Text style={styles.paymentOptionText}>Pay Cash</Text>
              </View>
            )}
            <Text style={styles.paymentRight}>${order.total.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.separatorBar}></View>

        {/* Order Data & Details */}
        <View style={styles.orderData}>
          <Text style={styles.orderDataTitle}>Order Data</Text>
          <View style={styles.orderDataItem}>
            <Text style={styles.orderDataItemText}>Restaurant Name</Text>
            <Text style={styles.orderDataItemText}>{order.restaurantData.name}</Text>
          </View>
          <View style={styles.orderDataItem}>
            <Text style={styles.orderDataItemText}>Order Date</Text>
            <Text style={styles.orderDataItemText}>{new Date(order.date).toLocaleString()}</Text>
          </View>
        </View>

        <View style={styles.orderDetails}>
          <View>
            <Text style={styles.orderDataTitle}>Order Details</Text>
            {order.items.map(item => (
              <View key={item.item.name} style={styles.orderDataItem}>
                <Text style={styles.orderDataItemText}>{item.item.name}</Text>
                <Text style={styles.orderDataItemText}>x {item.qty}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailScreen
