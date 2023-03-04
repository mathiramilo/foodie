import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export const styles = StyleSheet.create({
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
  }
})
