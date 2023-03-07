import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  imgContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  informationItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 22
  },
  informationItemLeft: {
    flex: 1
  },
  informationItemLeftLabel: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    textTransform: 'uppercase',
    color: theme.colors.gray,
    marginBottom: 8
  },
  informationItemLeftText: {
    width: '100%',
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black
  },
  separatorBar: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.gray,
    marginTop: 12,
    marginBottom: 18
  },
  editBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 4,
    borderColor: theme.colors.primary,
    borderWidth: 1
  },
  editText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.primary
  }
})
