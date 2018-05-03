import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  left: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20
  },
  logo: {
    marginTop: Metrics.smallMargin
  },
  logoImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  onsite: {
    marginLeft: Metrics.smallMargin
  },
  onsiteText: {
    color: 'white',
    marginTop: -6,
    fontSize: 10,
    fontWeight: 'bold'
  },
  logout: {
    marginTop: Metrics.doubleBaseMargin + 3,
    marginRight: Metrics.baseMargin + 3
  },
  logoutButton: {
    height: 30,
    width: 80,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center'
  },
  logoutText: {
    margin: 5,
    color: 'white',
    fontWeight: '500'
  }
})
