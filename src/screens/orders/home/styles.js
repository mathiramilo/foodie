import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  header: {
    marginBottom: 48,
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
  loadingErrorContainer: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingErrorText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
    marginTop: 4
  }
})
