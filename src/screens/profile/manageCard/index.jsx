import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Input, NavigationHeader } from '../../../components/common'

import { isVisa, formatCardNumber } from '../../../utils'
import theme from '../../../theme'
import { styles } from './styles'

const ManageCardScreen = ({ route, navigation }) => {
  const { card } = route.params

  const [newCard, setNewCard] = useState({
    cardNumber: card.cardNumber,
    cardHolder: card.cardHolder,
    expirationDate: card.expirationDate,
    cvv: card.cvv
  })

  const handleDelete = () => {}

  const handleSave = () => {}

  return (
    <View style={styles.container}>
      <NavigationHeader text="Manage Card" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.card,
            newCard.cardNumber
              ? isVisa(newCard.cardNumber)
                ? { backgroundColor: theme.colors.blue }
                : { backgroundColor: theme.colors.orange }
              : {}
          ]}
        >
          <View style={styles.cardTop}>
            {newCard.cardNumber !== '' ? (
              isVisa(newCard.cardNumber) ? (
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

          <Text style={styles.cardNumber}>{formatCardNumber(newCard.cardNumber)}</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.cardExpDate}>Valid thru: {newCard.expirationDate}</Text>
            <Text style={styles.cardHolder}>{newCard.cardHolder}</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Card Number"
            value={newCard.cardNumber}
            onChangeText={text => newNewCard({ ...newCard, cardNumber: text })}
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
            value={newCard.cardHolder}
            onChangeText={text => setNewCard({ ...newCard, cardHolder: text })}
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
            value={newCard.expirationDate}
            onChangeText={text => setNewCard({ ...newCard, expirationDate: text })}
            placeholder="MM/YY"
            placeholderTextColor={theme.colors.black}
            keyboardType=""
            autoComplete="off"
            autoCorrect={false}
            maxLength={5}
          />
          <Input
            label="CVV"
            value={newCard.cvv}
            onChangeText={text => setNewCard({ ...newCard, cvv: text })}
            placeholder="Enter the cvv"
            placeholderTextColor={theme.colors.black}
            keyboardType="number-pad"
            autoComplete="off"
            autoCorrect={false}
            maxLength={3}
          />
        </View>

        <View style={styles.separatorBar}></View>

        <TouchableOpacity onPress={handleDelete}>
          <View style={styles.deleteBtn}>
            <Text style={styles.deleteBtnText}>Delete</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave}>
          <View style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ManageCardScreen
