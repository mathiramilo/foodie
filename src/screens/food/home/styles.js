import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingLeft: 10
  },
  header: {
    marginBottom: 20,
    marginRight: 10
  },
  headerSubtitle: {
    fontSize: theme.fonts.size.subheading,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  },
  headerTitle: {
    fontSize: theme.fonts.size.heading,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.whiteVariant,
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 20,
    marginRight: 10
  },
  searchBarIcon: {},
  searchBarInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
    paddingVertical: 16
  },
  tagFilterContainer: {
    marginBottom: 20
  },
  tagFilterScroll: {
    flexDirection: 'row'
  },
  tagFilterItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 50
  },
  tagFilterItemText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginLeft: 6
  }
})
