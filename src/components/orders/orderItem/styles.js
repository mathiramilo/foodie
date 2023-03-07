import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  orderData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  orderDataImg: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginRight: 16
  },
  orderDataContent: {},
  orderDataTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
    height: 20,
    maxWidth: 148
  },
  orderDataTopTitle: {
    fontSize: 15,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginRight: 8
  },
  orderDataTopSubtitle: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  },
  orderDataBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  orderDataBottomPrice: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginRight: 8
  },
  orderDataBottomPayment: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  }
})
