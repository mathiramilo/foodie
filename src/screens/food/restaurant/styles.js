import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingLeft: 10
  },
  headerImg: {
    width: 48,
    height: 48
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    marginBottom: 25
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    marginBottom: 20
  },
  headerText: {},
  headerSubtitle: {
    fontSize: theme.fonts.size.subheading,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray,
    width: 180,
    height: 20
  },
  headerTitle: {
    fontSize: theme.fonts.size.heading,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  categoriesFirstItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 50,
    backgroundColor: theme.colors.primary
  },
  categoriesFirstItemText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginLeft: 6
  },
  categoriesItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 50
  },
  categoriesItemText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray
  },
  menuContainer: {
    marginRight: 20
  }
})
