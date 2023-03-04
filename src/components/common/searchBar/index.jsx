import { View, TextInput } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'

import theme from '../../../theme'
import { styles } from './styles'

const SearchBar = ({ placeholder, search, setSearch }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Octicons
        name="search"
        style={styles.searchBarIcon}
        size={24}
        color={search !== '' ? theme.colors.black : theme.colors.gray}
      />
      <TextInput
        style={styles.searchBarInput}
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder={placeholder}
      />
    </View>
  )
}

export default SearchBar
