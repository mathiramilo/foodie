import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import { StyleSheet, ActivityIndicator, View } from 'react-native'

import { init } from './db'

import { Provider } from 'react-redux'
import { store } from './store'

import AppNavigator from './navigation'

import theme from './theme'

init()
  .then(() => {
    console.log('Database initialized')
  })
  .catch(err => {
    console.log('Database failed to initialize')
    console.log(err)
  })

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf')
  })

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </>
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
