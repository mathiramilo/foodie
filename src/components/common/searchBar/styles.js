import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.whiteVariant,
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 20,
    marginRight: 10
  },
  searchBarIcon: {},
  searchBarInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
    paddingVertical: 16
  }
})
