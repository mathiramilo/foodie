import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { StarsRating } from '../../common'

import { styles } from './styles'

const CategoryMenuList = ({ category, filteredMenu, handlePressMenuItem }) => {
  const filteredMenuByCategory = filteredMenu.filter(item => item.category === category)

  if (filteredMenuByCategory.length === 0) return

  return (
    <View style={styles.menuSection}>
      <Text style={styles.menuSectionHeading}>{category}</Text>
      <View style={styles.menuSectionList}>
        {filteredMenuByCategory.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handlePressMenuItem(item)}>
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
        ))}
      </View>
    </View>
  )
}

export default CategoryMenuList
