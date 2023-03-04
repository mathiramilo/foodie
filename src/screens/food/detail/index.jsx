import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/order.slice'

import { StarsRating } from '../../../components/common'

import theme from '../../../theme'
import { styles } from './styles'

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()

  const { item, restaurant } = route.params

  const handleAddToOrder = () => {
    dispatch(addItem({ item, restaurant }))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={theme.colors.gray} />
        </TouchableOpacity>
        <Image style={styles.navigationLogo} resizeMode="contain" source={{ uri: restaurant.logoUrl }} />
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} resizeMode="cover" source={{ uri: item.imgUrl }} />
        </View>

        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderText}>
            <Text style={styles.contentHeaderSubtitle}>{item.category}</Text>
            <Text style={styles.contentHeaderTitle}>{item.name}</Text>
          </View>
          <Text style={styles.contentHeaderPrice}>${item.price.toFixed(2)}</Text>
        </View>

        <View style={styles.contentRating}>
          <StarsRating stars={item.stars} />
          <Text style={styles.contentRatingText}>{item.stars.toFixed(1)}</Text>
        </View>

        <Text style={styles.contentDescription}>{item.description}</Text>

        <View style={styles.contentTags}>
          {item.tags.map((tag, index) => (
            <View key={index} style={styles.contentTagsItem}>
              <Text style={styles.contentTagsItemText}>{tag}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={handleAddToOrder}>
          <View style={styles.contentCTA}>
            <Text style={styles.contentCTAIcon}>+</Text>
            <Text style={styles.contentCTAText}>Add to order</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default DetailScreen
