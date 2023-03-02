import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import RestaurantItem from '../restaurantItem'

import { styles } from './styles'

/*
  => When searching show all restaurants that match the search.
  => When not searching show favorite, featured and fastest restaurants.
*/
const RestaurantsList = ({
  listRef,
  navigation,
  search,
  filteredRestaurants,
  favoriteRestaurants,
  featuredRestaurants,
  fastestRestaurants
}) => {
  return (
    <ScrollView ref={listRef} style={styles.container}>
      {search !== '' ? (
        <View style={styles.restaurantsSection}>
          <Text style={styles.restaurantsSectionHeading}>Search by "{search}"</Text>
          <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
            {filteredRestaurants.map(restaurant => (
              <RestaurantItem key={restaurant.name} restaurant={restaurant} navigation={navigation} />
            ))}
          </ScrollView>
        </View>
      ) : (
        <>
          <View style={styles.restaurantsSection}>
            <Text style={styles.restaurantsSectionHeading}>Your Favorite Places</Text>
            <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
              {favoriteRestaurants.map(restaurant => (
                <RestaurantItem key={restaurant.name} restaurant={restaurant} navigation={navigation} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.restaurantsSection}>
            <Text style={styles.restaurantsSectionHeading}>Featured Places</Text>
            <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
              {featuredRestaurants.map(restaurant => (
                <RestaurantItem key={restaurant.name} restaurant={restaurant} navigation={navigation} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.restaurantsSection}>
            <Text style={styles.restaurantsSectionHeading}>Fastest Places</Text>
            <ScrollView style={styles.restaurantsSlider} horizontal showsHorizontalScrollIndicator={false}>
              {fastestRestaurants.map(restaurant => (
                <RestaurantItem key={restaurant.name} restaurant={restaurant} navigation={navigation} />
              ))}
            </ScrollView>
          </View>
        </>
      )}
    </ScrollView>
  )
}

export default RestaurantsList
