import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
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
    width: 48,
    height: 48
  },
  orderList: {
    marginBottom: 105
  },
  orderResume: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10
  },
  orderResumePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  orderResumePriceText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray
  },
  orderResumePriceAmount: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black
  },
  orderResumeCTA: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 8
  },
  orderResumeCTAText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.white,
    marginRight: 12
  },
  orderResumeCTAQty: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
    padding: 1,
    width: 20,
    height: 20,
    borderRadius: 4
  },
  orderResumeCTAQtyText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.white
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
