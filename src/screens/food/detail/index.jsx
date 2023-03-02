import { View, Text } from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/order.slice'

import { styles } from './styles'

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()

  const { item } = route.params

  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <Text>{item.name}</Text>
    </View>
  )
}

export default DetailScreen
