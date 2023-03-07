import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  navigationText: {
    fontSize: 18,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  navigationImg: {
    width: 36,
    height: 36
  }
})
