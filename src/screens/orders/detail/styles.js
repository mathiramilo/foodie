import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  order: {},
  addressContainer: {
    marginBottom: 20
  },
  addressTitle: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    textTransform: 'uppercase',
    color: theme.colors.gray,
    marginBottom: 12
  },
  addressSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addressSelectedData: {},
  addressSelectedTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginBottom: 4
  },
  addressSelectedStreet: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
    maxWidth: 280
  },
  addressSelectedRight: {},
  addressSelectedTag: {
    marginRight: 4,
    backgroundColor: theme.colors.black,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  addressSelectedTagText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.white
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary,
    padding: 14,
    marginBottom: 20
  },
  discountText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black
  },
  discountQty: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentOptionText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginLeft: 8
  },
  paymentRight: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginRight: 4
  },
  separatorBar: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.gray,
    marginVertical: 20
  },
  orderData: {
    marginBottom: 20
  },
  orderDataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  orderDataTitle: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    textTransform: 'uppercase',
    color: theme.colors.gray,
    marginBottom: 12
  },
  orderDataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  orderDataItemText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  orderDetails: {
    marginBottom: 20
  }
})
