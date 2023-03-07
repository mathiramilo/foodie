import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    textTransform: 'uppercase',
    color: theme.colors.gray,
    marginBottom: 8
  },
  input: {
    width: '100%',
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black
  }
})
