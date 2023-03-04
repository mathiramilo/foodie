import { View, Text } from 'react-native'
import React from 'react'

import MenuItem from '../menuItem'

import { styles } from './styles'

const CategoryMenuList = ({ category, filteredMenu, restaurant }) => {
  const filteredMenuByCategory = filteredMenu.filter(item => item.category === category)

  if (filteredMenuByCategory.length === 0) return

  return (
    <View style={styles.menuSection}>
      <Text style={styles.menuSectionHeading}>{category}</Text>
      <View style={styles.menuSectionList}>
        {filteredMenuByCategory.map((item, index) => (
          <MenuItem key={index} item={item} restaurant={restaurant} />
        ))}
      </View>
    </View>
  )
}

export default CategoryMenuList
