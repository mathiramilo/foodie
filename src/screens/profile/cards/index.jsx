import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useSelector } from 'react-redux'

import { NavigationHeader } from '../../../components/common'

import { showCardNumberLastDigits, isVisa } from '../../../utils'
import theme from '../../../theme'
import { styles } from './styles'

const CardsScreen = ({ navigation }) => {
  const { cards } = useSelector(state => state.auth)

  return (
    <View style={styles.container}>
      <NavigationHeader text="Your Cards" />

      <ScrollView>
        <View>
          {cards.map((card, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('ManageCard', { card })}>
              <View style={styles.cardItem}>
                <View style={styles.cardData}>
                  <Image
                    style={styles.cardDataImg}
                    resizeMode="contain"
                    source={
                      isVisa(card.cardNumber)
                        ? require('../../../assets/images/visa-icon.png')
                        : require('../../../assets/images/master-icon.png')
                    }
                  />
                  <View style={styles.cardDataContent}>
                    <Text style={styles.cardDataNumber}>{showCardNumberLastDigits(card.cardNumber)}</Text>
                    <Text style={styles.cardDataType}>Credit/Debit Card</Text>
                  </View>
                </View>

                <MaterialCommunityIcons name="dots-vertical" size={24} color={theme.colors.gray} />
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.separatorBar}></View>

          <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
            <View style={styles.addCardBtn}>
              <Text style={styles.addCardBtnIcon}>+</Text>
              <Text style={styles.addCardBtnText}>Add a new card</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default CardsScreen
