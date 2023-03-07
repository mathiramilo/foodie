import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../store/auth.slice'

import theme from '../../../theme'
import { styles } from './styles'
import { set } from 'firebase/database'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const [notifications, setNotifications] = useState(true)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image style={styles.userImg} resizeMode="contain" source={{ uri: user.imgUrl }} />
        <View style={styles.headerContent}>
          <Text style={styles.headerName}>{user.fullName}</Text>
          <Text style={styles.headerEmail}>{user.email}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Addresses')}>
            <View style={styles.sectionItem}>
              <View style={styles.sectionItemLeft}>
                <MaterialIcons name="location-on" size={24} color={theme.colors.black} />
                <Text style={styles.sectionItemText}>Addresses</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.black} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
            <View style={styles.sectionItem}>
              <View style={styles.sectionItemLeft}>
                <MaterialCommunityIcons name="credit-card-outline" size={24} color={theme.colors.black} />
                <Text style={styles.sectionItemText}>Payment</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.black} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Information')}>
            <View style={styles.sectionItem}>
              <View style={styles.sectionItemLeft}>
                <MaterialIcons name="info" size={24} color={theme.colors.black} />
                <Text style={styles.sectionItemText}>Information</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.black} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>

          <View style={styles.sectionItem}>
            <View style={styles.sectionItemLeft}>
              <MaterialIcons name="notifications" size={24} color={theme.colors.black} />
              <Text style={styles.sectionItemText}>Enable Notifications</Text>
            </View>
            <TouchableOpacity onPress={() => setNotifications(prev => !prev)}>
              <View
                style={[
                  styles.notificationsBtn,
                  notifications ? {} : { backgroundColor: theme.colors.gray, alignItems: 'flex-start' }
                ]}
              >
                <View style={styles.notificationsBtnCircle}></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <View style={styles.logoutBtn}>
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
