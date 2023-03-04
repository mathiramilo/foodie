import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  orderList: {
    marginBottom: 105
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22
  },
  orderItemImg: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 18
  },
  orderItemData: {
    flex: 1
  },
  orderItemDataHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  orderItemDataHeadingText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  orderItemDataHeadingPrice: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray
  },
  orderItemDataActions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  orderItemIncDec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 32
  },
  orderItemDecBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.black,
    borderWidth: 1,
    width: 24,
    height: 24,
    borderRadius: '50%'
  },
  orderItemDecText: {
    fontSize: 18,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black
  },
  orderItemIncDecQty: {
    fontSize: 16,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginHorizontal: 12
  },
  orderItemIncBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.black,
    borderWidth: 1,
    width: 24,
    height: 24,
    borderRadius: '50%'
  },
  orderItemIncText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.white
  }
})
