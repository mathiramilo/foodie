import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  inputContainer: {
    marginBottom: 20
  },
  addressPinPoint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: theme.colors.secondary,
    marginBottom: 20
  },
  addressPinPointLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addressPinPointLeftText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginLeft: 10
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
