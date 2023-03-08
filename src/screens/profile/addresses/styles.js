import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    marginBottom: 14
  },
  addressData: {},
  addressDataTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  addressDataTopTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginRight: 10
  },
  addressDataTopTag: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray
  },
  addressDataStreet: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
    maxWidth: 280
  },
  separatorBar: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.gray,
    marginTop: 6,
    marginBottom: 20
  },
  addAddressBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20
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
  }
})
