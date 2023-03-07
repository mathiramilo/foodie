import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  card: {
    justifyContent: 'space-between',
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: theme.colors.gray,
    marginBottom: 28,
    padding: 16
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardImg: {
    width: 40,
    height: 28
  },
  cardNumber: {
    fontSize: 18,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.white
  },
  cardBottom: {},
  cardExpDate: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.white,
    marginBottom: 6
  },
  cardHolder: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.white,
    textTransform: 'uppercase'
  },
  inputContainer: {
    marginBottom: 20
  },
  rowInputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  saveBtn: {
    width: '100%',
    padding: 16,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
  saveBtnText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  }
})
