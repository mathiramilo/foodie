import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    marginBottom: 14
  },
  paymentMethodData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentMethodDataContent: {
    marginLeft: 10
  },
  paymentMethodDataTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginBottom: 6
  },
  paymentMethodDataFee: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  }
})
