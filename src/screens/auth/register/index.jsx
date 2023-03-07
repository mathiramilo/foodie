import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { register, resetError } from '../../../store/auth.slice'

import User from '../../../models/User'

import { DismissKeyboardView, Input } from '../../../components/common'

import theme from '../../../theme'
import { styles } from './styles'

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.auth)

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [formError, setFormError] = useState('')

  const handleRegister = async () => {
    const { fullName, email, phone, password, confirmPassword } = formState

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setFormError('All fields are required')
      setTimeout(() => {
        setFormError('')
      }, 4000)
      return
    }
    if (password !== confirmPassword) {
      setFormError('Passwords do not match')
      setTimeout(() => {
        setFormError('')
      }, 4000)
      return
    }

    const user = new User(fullName, email, phone)
    dispatch(register({ email, password, user }))
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(resetError())
      setFormError('')
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      })
    }, [])
  )

  return (
    <DismissKeyboardView style={styles.container}>
      <Text style={styles.header}>Register new account</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Input
              label="Full Name"
              value={formState.fullName}
              onChangeText={text => setFormState(prev => ({ ...prev, fullName: text }))}
              placeholder="Enter your fullname"
              placeholderTextColor={theme.colors.black}
              autoCapitalize="words"
              autoComplete="name"
              autoCorrect={false}
            />
            <MaterialIcons name="person-outline" size={24} color={theme.colors.black} />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Email"
              value={formState.email}
              onChangeText={text => setFormState(prev => ({ ...prev, email: text }))}
              placeholder="Enter your email"
              placeholderTextColor={theme.colors.black}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
            />
            <MaterialCommunityIcons name="email-outline" size={24} color={theme.colors.black} />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Phone"
              value={formState.phone}
              onChangeText={text => setFormState(prev => ({ ...prev, phone: text }))}
              placeholder="Enter your phone number"
              placeholderTextColor={theme.colors.black}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoComplete=""
              autoCorrect={false}
            />
            <MaterialIcons name="phone-iphone" size={24} color={theme.colors.black} />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Password"
              value={formState.password}
              onChangeText={text => setFormState(prev => ({ ...prev, password: text }))}
              placeholder="Enter a password"
              placeholderTextColor={theme.colors.black}
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              secureTextEntry
            />
            <MaterialCommunityIcons name="lock-outline" size={24} color={theme.colors.black} />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Repeat Password"
              value={formState.confirmPassword}
              onChangeText={text => setFormState(prev => ({ ...prev, confirmPassword: text }))}
              placeholder="Confirm the password"
              placeholderTextColor={theme.colors.black}
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              secureTextEntry
            />
            <MaterialIcons name="repeat" size={24} color={theme.colors.black} />
          </View>

          {(error || formError !== '') && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error-outline" size={18} color={theme.colors.red} />
              <Text style={styles.errorText}>{error ? error : formError}</Text>
            </View>
          )}

          <TouchableOpacity disabled={loading} onPress={handleRegister}>
            <View style={styles.button}>
              {loading ? (
                <ActivityIndicator size="small" color={theme.colors.black} />
              ) : (
                <Text style={styles.buttonText}>Register</Text>
              )}
            </View>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </DismissKeyboardView>
  )
}

export default RegisterScreen
