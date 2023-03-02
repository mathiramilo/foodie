import { View, Text } from 'react-native'
import React from 'react'

const StarsRating = ({ stars }) => {
  return (
    <View>
      <Text>{stars.toFixed(1)}</Text>
    </View>
  )
}

export default StarsRating
