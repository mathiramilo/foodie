import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  navigationLogo: {
    width: 48,
    height: 48
  },
  contentContainer: {},
  imgContainer: {
    width: '100%',
    height: 220,
    marginBottom: 20
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  contentHeaderText: {},
  contentHeaderSubtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray,
    marginBottom: 2
  },
  contentHeaderTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.type.bold,
    color: theme.colors.black,
    maxWidth: 260
  },
  contentHeaderPrice: {
    fontSize: 18,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  contentRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  contentRatingText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray,
    marginLeft: 10
  },
  contentDescription: {
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray,
    marginBottom: 20
  },
  contentTags: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 32
  },
  contentTagsItem: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  contentTagsItemText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  contentCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    marginBottom: 24
  },
  contentCTAIcon: {
    fontSize: 16,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginRight: 10
  },
  contentCTAText: {
    fontSize: 16,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  }
})
