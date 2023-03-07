import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    marginBottom: 14
  },
  cardData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardDataImg: {
    width: 44,
    height: 30,
    marginRight: 18
  },
  cardDataContent: {},
  cardDataNumber: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginBottom: 10
  },
  cardDataType: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  },
  separatorBar: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.gray,
    marginTop: 6,
    marginBottom: 20
  },
  addCardBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20
  },
  addCardBtnIcon: {
    marginRight: 4,
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.type.medium
  },
  addCardBtnText: {
    marginRight: 4,
    color: theme.colors.black,
    fontSize: 14,
    fontFamily: theme.fonts.type.medium
  }
})
