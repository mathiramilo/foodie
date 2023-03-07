import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../../store/orders.slice'

import { OrderItem } from '../../../components/orders'

import theme from '../../../theme'
import { styles } from './styles'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { items: orders, loading, error } = useSelector(state => state.orders)

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchOrders({ email: user.email }))
    }, [user.email])
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Order History</Text>
        <Text style={styles.headerTitle}>Look at your orders</Text>
      </View>

      {loading ? (
        <View style={styles.loadingErrorContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
          keyExtractor={item => item.date}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.loadingErrorContainer}>
          <Ionicons name="ios-warning-outline" size={28} color={theme.colors.primary} />
          <Text style={styles.loadingErrorText}>{error || "You don't have any orders yet"}</Text>
        </View>
      )}
    </View>
  )
}

export default HomeScreen
