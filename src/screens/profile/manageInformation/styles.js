import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  avatarItem: {
    marginBottom: 22
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 22
  },
  itemTitle: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    textTransform: 'uppercase',
    color: theme.colors.gray,
    marginBottom: 14
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  previewImg: {
    width: 75,
    height: 75,
    borderRadius: '50%',
    marginRight: 20
  },
  changeImgOptions: {},
  changeImgOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  changeImgText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.medium,
    color: theme.colors.black,
    marginLeft: 8
  },
  itemLeft: {
    flex: 1
  },
  itemLeftLabel: {
    fontSize: 12,
    fontFamily: theme.fonts.type.medium,
    textTransform: 'uppercase',
    color: theme.colors.gray,
    marginBottom: 8
  },
  itemLeftText: {
    width: '100%',
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.gray
  },
  separatorBar: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.gray,
    marginTop: 12,
    marginBottom: 18
  },
  saveBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: theme.colors.primary
  },
  saveBtnText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.black
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 10
  },
  errorText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.red,
    marginLeft: 8
  }
})
