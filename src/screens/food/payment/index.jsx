import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { setPaymentType } from '../../../store/order.slice'

import { NavigationHeader } from '../../../components/common'
import { OrderResumeCTA } from '../../../components/food'

import theme from '../../../theme'
import { styles } from './styles'

const PaymentScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { restaurant, items, paymentType, total } = useSelector(state => state.order)

  return (
    <View style={styles.container}>
      <NavigationHeader text="Payment Method" logoUrl={restaurant.logoUrl} />

      <View>
        {/* Pay Cash */}
        <TouchableOpacity onPress={() => dispatch(setPaymentType({ paymentType: 'cash' }))}>
          <View style={[styles.paymentMethod, paymentType === 'cash' && { borderColor: theme.colors.primary }]}>
            <View style={styles.paymentMethodData}>
              <MaterialCommunityIcons
                name="cash"
                size={44}
                color={paymentType === 'cash' ? theme.colors.primary : theme.colors.gray}
              />

              <View style={styles.paymentMethodDataContent}>
                <Text style={styles.paymentMethodDataTitle}>Pay cash on delivery</Text>
                <Text style={styles.paymentMethodDataFee}>Fee: $0.00</Text>
              </View>
            </View>

            {paymentType === 'cash' && (
              <MaterialCommunityIcons name="check-circle" size={24} color={theme.colors.primary} />
            )}
          </View>
        </TouchableOpacity>

        {/* Credit/Debit Card */}
        <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
          <View style={[styles.paymentMethod, paymentType === 'card' && { borderColor: theme.colors.primary }]}>
            <View style={styles.paymentMethodData}>
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={44}
                color={paymentType === 'card' ? theme.colors.primary : theme.colors.gray}
              />

              <View style={styles.paymentMethodDataContent}>
                <Text style={styles.paymentMethodDataTitle}>Credit/Debit Card</Text>
                <Text style={styles.paymentMethodDataFee}>Fee: $0.00</Text>
              </View>
            </View>

            {paymentType === 'card' && (
              <MaterialCommunityIcons name="check-circle" size={24} color={theme.colors.primary} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <OrderResumeCTA text="Checkout" total={total} navigateTo="Checkout" itemsLength={items.length} />
    </View>
  )
}

export default PaymentScreen
