import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  restaurantItem: {
    marginRight: 22,
    width: 236
  },
  restaurantItemImgContainer: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    marginBottom: 16
  },
  restaurantItemImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  restaurantItemData: {
    justifyContent: 'space-between'
  },
  restaurantItemTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    height: 22,
    marginBottom: 4
  },
  restaurantItemDescription: {
    fontSize: theme.fonts.size.text,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray,
    height: 36,
    marginBottom: 8
  },
  restaurantItemBenchmarks: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  restaurantItemBenchmarksItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  restaurantItemBenchmarksItemText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginLeft: 4
  }
})
