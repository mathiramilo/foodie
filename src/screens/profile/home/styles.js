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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 36
  },
  userImg: {
    width: 85,
    height: 85,
    borderRadius: '50%',
    marginRight: 20
  },
  headerContent: {},
  headerName: {
    fontSize: 18,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black,
    marginBottom: 4
  },
  headerEmail: {
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  },
  section: {
    marginBottom: 28
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.gray,
    marginBottom: 28
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  sectionItemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionItemText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
    marginLeft: 10
  },
  logoutContainer: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray
  },
  logoutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
    backgroundColor: theme.colors.black,
    borderRadius: 4
  },
  logoutText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.white
  },
  notificationsBtn: {
    width: 50,
    height: 25,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 3,
    borderRadius: 99
  },
  notificationsBtnCircle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: theme.colors.white
  }
})
