import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  section: {
    margin: Metrics.smallSection
  },
  loginInput: {
    height: 120,
    width: Metrics.screenWidth * 0.75,
    color: Colors.text
  },
  forgotText: {
    fontSize: 20,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.baseMargin - 5
  },
  toast: {
    backgroundColor: Colors.placeholder
  },
  toastText: {
    color: Colors.blue,
    fontSize: 20,
    paddingHorizontal: Metrics.baseMargin
  }

})
