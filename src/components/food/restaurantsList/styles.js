import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  restaurantsSection: {
    marginBottom: 20
  },
  restaurantsSectionHeading: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginBottom: 14
  },
  restaurantsSlider: {},
  restaurantItem: {
    marginRight: 10
  }
})
