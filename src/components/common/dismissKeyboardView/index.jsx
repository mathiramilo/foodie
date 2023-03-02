import { View, Keyboard } from 'react-native'
import React from 'react'

const DismissKeyboardView = ({ children, style }) => {
  return (
    <View style={style} onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </View>
  )
}

export default DismissKeyboardView
