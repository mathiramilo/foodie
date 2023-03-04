import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from '../../../store/order.slice'

import { NavigationHeader } from '../../../components/common'
import { OrderResumeCTA } from '../../../components/food'

import theme from '../../../theme'
import { styles } from './styles'

const OrderScreen = ({ navigation }) => {
  const { restaurant, items, total } = useSelector(state => state.order)

  useEffect(() => {
    if (items.length === 0) navigation.goBack()
  }, [items])

  return (
    <View style={styles.container}>
      <NavigationHeader text="Your Order" logoUrl={restaurant.logoUrl} />

      <FlatList
        data={items}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.item.name}
        ListEmptyComponent={() => <Text style={styles.emptyText}>Your order is empty</Text>}
        showsVerticalScrollIndicator={false}
        style={styles.orderList}
      />

      <OrderResumeCTA text="Place Order" total={total} navigateTo="Checkout" itemsLength={items.length} />
    </View>
  )
}

const OrderItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.orderItem}>
      <Image style={styles.orderItemImg} resizeMode="cover" source={{ uri: item.item.imgUrl }} />

      <View style={styles.orderItemData}>
        <View style={styles.orderItemDataHeading}>
          <Text style={styles.orderItemDataHeadingText}>
            {item.qty} x {item.item.name}
          </Text>
          <Text style={styles.orderItemDataHeadingPrice}>${item.item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.orderItemDataActions}>
          <View style={styles.orderItemIncDec}>
            <TouchableOpacity onPress={() => dispatch(decreaseItem({ item: item.item }))}>
              <View style={styles.orderItemDecBtn}>
                <Text style={styles.orderItemDecText}>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.orderItemIncDecQty}>{item.qty}</Text>
            <TouchableOpacity onPress={() => dispatch(increaseItem({ item: item.item }))}>
              <View style={styles.orderItemIncBtn}>
                <Text style={styles.orderItemIncText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => dispatch(removeItem({ item: item.item }))}>
            <MaterialCommunityIcons name="trash-can-outline" size={22} color={theme.colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OrderScreen
