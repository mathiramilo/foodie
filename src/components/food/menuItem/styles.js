import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  menuItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  menuItemImg: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20
  },
  menuItemData: {
    flex: 1
  },
  menuItemTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginBottom: 6
  },
  menuItemDescription: {
    fontSize: theme.fonts.size.text,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray,
    marginBottom: 8,
    height: 30
  },
  menuItemPriceStars: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemPrice: {
    fontSize: 13,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginRight: 10
  }
})
