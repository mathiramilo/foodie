import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Input, NavigationHeader } from '../../../components/common'

import { isVisa, formatCardNumber } from '../../../utils'
import theme from '../../../theme'
import { styles } from './styles'

const AddCardScreen = () => {
  const [card, setCard] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  })

  const handleSave = () => {}

  return (
    <View style={styles.container}>
      <NavigationHeader text="Add new Card" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.card,
            card.cardNumber
              ? isVisa(card.cardNumber)
                ? { backgroundColor: theme.colors.blue }
                : { backgroundColor: theme.colors.orange }
              : {}
          ]}
        >
          <View style={styles.cardTop}>
            {card.cardNumber !== '' ? (
              isVisa(card.cardNumber) ? (
                <Image
                  style={styles.cardImg}
                  resizeMode="contain"
                  source={require('../../../assets/images/visa-icon.png')}
                />
              ) : (
                <Image
                  style={styles.cardImg}
                  resizeMode="contain"
                  source={require('../../../assets/images/master-icon.png')}
                />
              )
            ) : null}
            <MaterialCommunityIcons
              style={{ transform: [{ rotate: '45deg' }] }}
              name="signal-variant"
              size={24}
              color={theme.colors.white}
            />
          </View>

          <Text style={styles.cardNumber}>{formatCardNumber(card.cardNumber)}</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.cardExpDate}>Valid thru: {card.expirationDate}</Text>
            <Text style={styles.cardHolder}>{card.cardHolder}</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Card Number"
            value={card.cardNumber}
            onChangeText={text => setCard({ ...card, cardNumber: text })}
            placeholder="Enter the card number"
            placeholderTextColor={theme.colors.black}
            keyboardType="number-pad"
            autoComplete="off"
            autoCorrect={false}
            maxLength={16}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Card Holder"
            value={card.cardHolder}
            onChangeText={text => setCard({ ...card, cardHolder: text })}
            placeholder="Enter the card holder"
            placeholderTextColor={theme.colors.black}
            autoComplete="name"
            autoCapitalize="words"
            autoCorrect={false}
            maxLength={30}
          />
        </View>

        <View style={styles.rowInputContainer}>
          <Input
            label="Expiration Date"
            value={card.expirationDate}
            onChangeText={text => setCard({ ...card, expirationDate: text })}
            placeholder="MM/YY"
            placeholderTextColor={theme.colors.black}
            keyboardType=""
            autoComplete="off"
            autoCorrect={false}
            maxLength={5}
          />
          <Input
            label="CVV"
            value={card.cvv}
            onChangeText={text => setCard({ ...card, cvv: text })}
            placeholder="Enter the cvv"
            placeholderTextColor={theme.colors.black}
            keyboardType="number-pad"
            autoComplete="off"
            autoCorrect={false}
            maxLength={3}
          />
        </View>

        <TouchableOpacity onPress={handleSave}>
          <View style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default AddCardScreen
