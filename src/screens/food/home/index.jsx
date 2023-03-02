import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Octicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { filterRestaurantsBySearch, filterRestaurantsByTag } from '../../../store/restaurants.slice'

import { getFavoriteRestaurants, getFeaturedRestaurants, getFastestRestaurants, getFirstName } from '../../../utils'
import { RestaurantsList } from '../../../components/food'

import { styles } from './styles'
import theme from '../../../theme'

const tags = [
  { label: 'Breakfast', icon: 'coffee-outline' },
  { label: 'Lunch', icon: 'food-outline' },
  { label: 'Dinner', icon: 'food-steak' },
  { label: 'Snack', icon: 'food-croissant' },
  { label: 'Dessert', icon: 'ice-cream' }
]

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { filteredItems: filteredRestaurants, loading, error } = useSelector(state => state.restaurants)

  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState('Breakfast')

  const [favoriteRestaurants, setFavoriteRestaurants] = useState([])
  const [featuredRestaurants, setFeaturedRestaurants] = useState([])
  const [fastestRestaurants, setFastestRestaurants] = useState([])

  useEffect(() => {
    dispatch(filterRestaurantsByTag({ tag: selectedTag }))
    setSearch('')
  }, [selectedTag])

  useEffect(() => {
    dispatch(filterRestaurantsBySearch({ search }))
  }, [search])

  useEffect(() => {
    const favoriteRestaurants = getFavoriteRestaurants(filteredRestaurants, user.favoriteRestaurants)
    const featuredRestaurants = getFeaturedRestaurants(filteredRestaurants)
    const fastestRestaurants = getFastestRestaurants(filteredRestaurants)

    setFavoriteRestaurants(favoriteRestaurants)
    setFeaturedRestaurants(featuredRestaurants)
    setFastestRestaurants(fastestRestaurants)
  }, [filteredRestaurants])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Welcome {getFirstName(user.fullName)},</Text>
        <Text style={styles.headerTitle}>Enjoy your meal!</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <Octicons
          name="search"
          style={styles.searchBarIcon}
          size={24}
          color={search !== '' ? theme.colors.black : theme.colors.gray}
        />
        <TextInput
          style={styles.searchBarInput}
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder="Search Places"
        />
      </View>

      <View style={styles.tagFilterContainer}>
        <ScrollView style={styles.tagFilterScroll} horizontal showsHorizontalScrollIndicator={false}>
          {tags.map((tag, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => setSelectedTag(tag.label)}>
              <View
                style={[
                  styles.tagFilterItem,
                  selectedTag === tag.label ? { backgroundColor: theme.colors.primary } : {}
                ]}
              >
                {selectedTag === tag.label && (
                  <MaterialCommunityIcons name={tag.icon} size={20} color={theme.colors.black} />
                )}
                <Text style={[styles.tagFilterItemText, selectedTag !== tag.label ? { color: theme.colors.gray } : {}]}>
                  {tag.label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>

      {error ? (
        <Text>{error}</Text>
      ) : loading ? (
        <Text>Loading...</Text>
      ) : (
        <RestaurantsList
          search={search}
          filteredRestaurants={filteredRestaurants}
          favoriteRestaurants={favoriteRestaurants}
          featuredRestaurants={featuredRestaurants}
          fastestRestaurants={fastestRestaurants}
        />
      )}
    </View>
  )
}

export default HomeScreen
