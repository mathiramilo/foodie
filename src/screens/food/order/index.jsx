import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from '../../../store/order.slice'

import theme from '../../../theme'
import { styles } from './styles'

const OrderScreen = ({ navigation }) => {
  const { restaurant, items, total } = useSelector(state => state.order)

  useEffect(() => {
    if (items.length === 0) navigation.goBack()
  }, [items])

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={theme.colors.gray} />
        </TouchableOpacity>
        <Text style={styles.navigationText}>Your Order</Text>
        <Image style={styles.navigationImg} resizeMode="contain" source={{ uri: restaurant.logoUrl }} />
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.item.name}
        ListEmptyComponent={() => <Text style={styles.emptyText}>Your order is empty</Text>}
        showsVerticalScrollIndicator={false}
        style={styles.orderList}
      />

      <View style={styles.orderResume}>
        <View style={styles.orderResumePrice}>
          <Text style={styles.orderResumePriceText}>Total order:</Text>
          <Text style={styles.orderResumePriceAmount}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
          <View style={styles.orderResumeCTA}>
            <Text style={styles.orderResumeCTAText}>Place order</Text>
            <View style={styles.orderResumeCTAQty}>
              <Text style={styles.orderResumeCTAQtyText}>{items.length}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
