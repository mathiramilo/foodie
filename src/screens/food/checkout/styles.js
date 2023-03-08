import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
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
  addressSelectedRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
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
  addressChangeBtn: {
    paddingLeft: 8,
    paddingVertical: 8
  },
  addAddressBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.black,
    borderWidth: 1,
    borderRadius: 4,
    padding: 18
  },
  addAddressBtnIcon: {
    marginRight: 4,
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.type.medium
  },
  addAddressBtnText: {
    marginRight: 4,
    color: theme.colors.black,
    fontSize: 14,
    fontFamily: theme.fonts.type.medium
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
  discountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.black,
    borderWidth: 1,
    borderRadius: 4,
    padding: 6
  },
  discountBtnIcon: {
    marginRight: 4,
    color: theme.colors.black,
    fontSize: 14,
    fontFamily: theme.fonts.type.regular
  },
  discountBtnText: {
    color: theme.colors.black,
    fontSize: 12,
    fontFamily: theme.fonts.type.regular
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentRightText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray,
    marginRight: 4
  },
  paymentRightFee: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginRight: 4
  },
  paymentChangeBtn: {
    paddingLeft: 8,
    paddingVertical: 8
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
    marginBottom: 140
  },
  orderDetailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  orderDetailsItemText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  }
})
