import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import theme from '../../../theme'
import { styles } from './styles'

const NavigationHeader = ({ text, logoUrl }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={32} color={theme.colors.gray} />
      </TouchableOpacity>
      <Text style={styles.navigationText}>{text}</Text>
      <Image style={styles.navigationImg} resizeMode="contain" source={{ uri: logoUrl }} />
    </View>
  )
}

export default NavigationHeader
