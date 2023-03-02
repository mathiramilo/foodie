import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { styles } from './styles'

const RestaurantsList = ({
  search,
  filteredRestaurants,
  favoriteRestaurants,
  featuredRestaurants,
  fastestRestaurants
}) => {
  return (
    <ScrollView style={styles.container}>
      {search !== '' ? (
        <View style={styles.restaurantsSection}>
          <Text style={styles.restaurantsSectionHeading}>Search by {search}</Text>
          <ScrollView style={styles.restaurantsSlider} horizontal>
            {filteredRestaurants.map(restaurant => (
              <View key={restaurant.name} style={styles.restaurantItem}>
                <Text>{restaurant.name}</Text>
                <Text>{restaurant.description}</Text>
                <Text>{restaurant.avgTime}</Text>
                <Text>{restaurant.stars}</Text>
                <Text>{restaurant.deliveryCost}</Text>
                <Image style={{ width: 24, height: 24 }} source={{ uri: restaurant.logoUrl }} />
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <>
          <View style={styles.restaurantsSection}>
            <Text style={styles.restaurantsSectionHeading}>Your Favorite Places</Text>
            <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
              {favoriteRestaurants.map(restaurant => (
                <View key={restaurant.name} style={styles.restaurantItem}>
                  <Text>{restaurant.name}</Text>
                  <Text>{restaurant.description}</Text>
                  <Text>{restaurant.avgTime}</Text>
                  <Text>{restaurant.stars}</Text>
                  <Text>{restaurant.deliveryCost}</Text>
                  <Image style={{ width: 24, height: 24 }} source={{ uri: restaurant.logoUrl }} />
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.restaurantsSection}>
            <Text style={styles.restaurantsSectionHeading}>Featured Places</Text>
            <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
              {featuredRestaurants.map(restaurant => (
                <View key={restaurant.name} style={styles.restaurantItem}>
                  <Text>{restaurant.name}</Text>
                  <Text>{restaurant.description}</Text>
                  <Text>{restaurant.avgTime}</Text>
                  <Text>{restaurant.stars}</Text>
                  <Text>{restaurant.deliveryCost}</Text>
                  <Image style={{ width: 24, height: 24 }} source={{ uri: restaurant.logoUrl }} />
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.restaurantsSection}>
            <Text style={styles.restaurantsSectionHeading}>Fastest Places</Text>
            <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
              {fastestRestaurants.map(restaurant => (
                <View key={restaurant.name} style={styles.restaurantItem}>
                  <Text>{restaurant.name}</Text>
                  <Text>{restaurant.description}</Text>
                  <Text>{restaurant.avgTime}</Text>
                  <Text>{restaurant.stars}</Text>
                  <Text>{restaurant.deliveryCost}</Text>
                  <Image style={{ width: 24, height: 24 }} source={{ uri: restaurant.logoUrl }} />
                </View>
              ))}
            </ScrollView>
          </View>
        </>
      )}
    </ScrollView>
  )
}

export default RestaurantsList
