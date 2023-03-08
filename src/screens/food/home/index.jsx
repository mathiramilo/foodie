import { View, Text, TouchableWithoutFeedback, ScrollView, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { filterRestaurantsBySearch, filterRestaurantsByTag } from '../../../store/restaurants.slice'
import { clearOrder } from '../../../store/order.slice'

import { getFavoriteRestaurants, getFeaturedRestaurants, getFastestRestaurants, getFirstName } from '../../../utils'

import { RestaurantsList } from '../../../components/food'
import { DismissKeyboardView, SearchBar } from '../../../components/common'

import { styles } from './styles'
import theme from '../../../theme'
import { useFocusEffect } from '@react-navigation/native'

const tags = [
  { label: 'Breakfast', icon: 'coffee-outline' },
  { label: 'Lunch', icon: 'food-outline' },
  { label: 'Dinner', icon: 'food-steak' },
  { label: 'Snack', icon: 'food-croissant' },
  { label: 'Dessert', icon: 'ice-cream' }
]

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { filteredItems: filteredRestaurants, loading, error } = useSelector(state => state.restaurants)

  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState('Breakfast')

  const [favoriteRestaurants, setFavoriteRestaurants] = useState([])
  const [featuredRestaurants, setFeaturedRestaurants] = useState([])
  const [fastestRestaurants, setFastestRestaurants] = useState([])

  const restaurantsListRef = useRef()

  useEffect(() => {
    dispatch(filterRestaurantsByTag({ tag: selectedTag }))
    setSearch('')
    restaurantsListRef.current?.scrollTo({ animated: true, y: 0 })
  }, [selectedTag])

  useEffect(() => {
    dispatch(filterRestaurantsBySearch({ search }))
  }, [search])

  useEffect(() => {
    const favoriteRestaurants = getFavoriteRestaurants(filteredRestaurants, user.favorites)
    const featuredRestaurants = getFeaturedRestaurants(filteredRestaurants)
    const fastestRestaurants = getFastestRestaurants(filteredRestaurants)

    setFavoriteRestaurants(favoriteRestaurants)
    setFeaturedRestaurants(featuredRestaurants)
    setFastestRestaurants(fastestRestaurants)
  }, [filteredRestaurants])

  useFocusEffect(
    useCallback(() => {
      dispatch(clearOrder())
    })
  )

  return (
    <DismissKeyboardView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Welcome {getFirstName(user.fullName)},</Text>
        <Text style={styles.headerTitle}>Enjoy your meal!</Text>
      </View>

      <SearchBar placeholder="Search Places" search={search} setSearch={setSearch} />

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
                  <MaterialCommunityIcons
                    style={styles.tagFilterItemIcon}
                    name={tag.icon}
                    size={20}
                    color={theme.colors.black}
                  />
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
        <View style={styles.loadingErrorContainer}>
          <Text>{error}</Text>
        </View>
      ) : loading ? (
        <View style={styles.loadingErrorContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        <RestaurantsList
          listRef={restaurantsListRef}
          navigation={navigation}
          search={search}
          filteredRestaurants={filteredRestaurants}
          favoriteRestaurants={favoriteRestaurants}
          featuredRestaurants={featuredRestaurants}
          fastestRestaurants={fastestRestaurants}
        />
      )}
    </DismissKeyboardView>
  )
}

export default HomeScreen
