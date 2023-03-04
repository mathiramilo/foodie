import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import theme from '../../../theme'

const StarsRating = ({ stars }) => {
  return (
    <View style={styles.starsRatingContainer}>
      <MaterialCommunityIcons name="star" size={18} color={stars >= 1 ? theme.colors.primary : theme.colors.gray} />
      <MaterialCommunityIcons name="star" size={18} color={stars >= 2 ? theme.colors.primary : theme.colors.gray} />
      <MaterialCommunityIcons name="star" size={18} color={stars >= 3 ? theme.colors.primary : theme.colors.gray} />
      <MaterialCommunityIcons name="star" size={18} color={stars >= 4 ? theme.colors.primary : theme.colors.gray} />
      <MaterialCommunityIcons name="star" size={18} color={stars >= 5 ? theme.colors.primary : theme.colors.gray} />
    </View>
  )
}

const styles = StyleSheet.create({
  starsRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default StarsRating
