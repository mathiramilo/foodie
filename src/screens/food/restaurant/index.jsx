import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useSelector } from 'react-redux'

import { DismissKeyboardView, SearchBar, StarsRating } from '../../../components/common'

import theme from '../../../theme'
import { styles } from './styles'
import { CategoryMenuList } from '../../../components/food'

const RestaurantScreen = ({ route, navigation }) => {
  const { restaurant } = route.params

  const { menu, categories } = restaurant

  const { user } = useSelector(state => state.auth)
  const isFavorite = user.favoriteRestaurants.some(favorite => favorite === restaurant.name)

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredMenu, setFilteredMenu] = useState(menu)

  const menuListRef = useRef()

  const handlePressMenuItem = item => navigation.navigate('Detail', { item })

  useEffect(() => {
    setFilteredMenu(menu.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredMenu(menu)
    } else {
      setFilteredMenu(menu.filter(item => item.category === selectedCategory))
    }
    setSearch('')
    menuListRef.current?.scrollTo({ animated: true, y: 0 })
  }, [selectedCategory])

  return (
    <DismissKeyboardView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={theme.colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
            size={32}
            color={isFavorite ? theme.colors.red : theme.colors.gray}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerSubtitle}>{restaurant.slogan}</Text>
          <Text style={styles.headerTitle}>{restaurant.name}</Text>
        </View>
        <Image style={styles.headerImg} resizeMode="contain" source={{ uri: restaurant.logoUrl }} />
      </View>

      <SearchBar search={search} setSearch={setSearch} />

      <View style={styles.categoriesContainer}>
        <TouchableOpacity onPress={() => setSelectedCategory('')}>
          <View style={styles.categoriesFirstItem}>
            <MaterialCommunityIcons name="silverware" size={20} color={theme.colors.black} />
            <Text style={styles.categoriesFirstItemText}>Menu</Text>
          </View>
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedCategory(category)}>
              <View style={styles.categoriesItem}>
                <Text
                  style={[
                    styles.categoriesItemText,
                    selectedCategory === category ? { color: theme.colors.black } : {}
                  ]}
                >
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView ref={menuListRef} style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {search !== ''
          ? filteredMenu.map((item, index) => (
              <View style={styles.menuSection}>
                <Text style={styles.menuSectionHeading}>Search by "{search}"</Text>
                <View style={styles.menuSectionList}>
                  {filteredMenu.map((item, index) => (
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
            ))
          : categories.map((category, index) => (
              <CategoryMenuList
                key={index}
                category={category}
                filteredMenu={filteredMenu}
                handlePressMenuItem={handlePressMenuItem}
              />
            ))}
      </ScrollView>
    </DismissKeyboardView>
  )
}

export default RestaurantScreen
