import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabsContainerStyle: {
    width: Metrics.screenWidth * 0.75,
    height: 50
  },
  tabStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  tabTextStyle: {
    color: Colors.blue,
    fontFamily: 'Raleway-Regular',
    fontSize: 15
  },
  activeTabStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: Colors.orange,
    borderBottomWidth: 3
  },
  activeTabTextStyle: {
    color: '#283D51',
    fontFamily: 'Raleway-Bold'
  }
})
