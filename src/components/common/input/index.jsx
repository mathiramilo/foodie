import { View, Text, TextInput } from 'react-native'
import React from 'react'

import { styles } from './styles'

const Input = ({ label, placeholder, value, onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder} {...props} />
    </View>
  )
}

export default Input
