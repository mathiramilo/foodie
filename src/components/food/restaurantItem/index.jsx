import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import theme from '../../../theme'
import { styles } from './styles'

const RestaurantItem = ({ restaurant, navigation }) => {
  const handleSelectRestaurant = () => navigation.navigate('Restaurant', { restaurant })

  return (
    <TouchableOpacity key={restaurant.name} onPress={handleSelectRestaurant}>
      <View style={styles.restaurantItem}>
        <View style={styles.restaurantItemImgContainer}>
          <Image style={styles.restaurantItemImg} source={{ uri: restaurant.imgUrl }} />
        </View>
        <View style={styles.restaurantItemData}>
          <View style={styles.restaurantItemDataHeading}>
            <Text style={styles.restaurantItemTitle}>{restaurant.name}</Text>
            <Text style={styles.restaurantItemDescription}>{restaurant.description}</Text>
          </View>
          <View style={styles.restaurantItemBenchmarks}>
            <View style={styles.restaurantItemBenchmarksItem}>
              <MaterialCommunityIcons name="timer-outline" size={18} color={theme.colors.black} />
              <Text style={styles.restaurantItemBenchmarksItemText}>{restaurant.avgTime} min</Text>
            </View>
            <View style={styles.restaurantItemBenchmarksItem}>
              <MaterialCommunityIcons name="star-outline" size={18} color={theme.colors.black} />
              <Text style={styles.restaurantItemBenchmarksItemText}>{restaurant.stars.toFixed(1)}</Text>
            </View>
            <View style={styles.restaurantItemBenchmarksItem}>
              <MaterialCommunityIcons name="car-outline" size={18} color={theme.colors.black} />
              <Text style={styles.restaurantItemBenchmarksItemText}>
                {restaurant.deliveryCost === 0 ? 'Free delivery' : `$${restaurant.deliveryCost}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantItem
