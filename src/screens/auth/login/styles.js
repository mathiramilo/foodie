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
    fontSize: theme.fonts.size.heading,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginTop: 32,
    marginBottom: 48
  },
  form: {},
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 22
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 10
  },
  errorText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.red,
    marginLeft: 8
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  buttonText: {
    fontSize: 16,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
  linkText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black
  },
  link: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginLeft: 6
  }
})
