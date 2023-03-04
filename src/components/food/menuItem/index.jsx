import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { StarsRating } from '../../common'

import { styles } from './styles'

const MenuItem = ({ item, restaurant }) => {
  const navigation = useNavigation()

  const handlePressMenuItem = () => navigation.navigate('Detail', { item, restaurant })

  return (
    <TouchableOpacity onPress={() => handlePressMenuItem(item, restaurant)}>
      <View style={styles.menuItem}>
        <Image style={styles.menuItemImg} resizeMode="cover" source={{ uri: item.imgUrl }} />
        <View style={styles.menuItemData}>
          <Text style={styles.menuItemTitle}>{item.name}</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <View style={styles.menuItemPriceStars}>
            <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
            <StarsRating stars={item.stars} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MenuItem
