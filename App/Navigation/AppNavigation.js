import {StackNavigator} from 'react-navigation'

import Loading from '../Components/Loading'
import LoggedInStack from './LoggedInStack'
import NotLoggedInStack from './NotLoggedInStack'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoadingScreen: { screen: Loading },
  LoggedInStack: { screen: LoggedInStack },
  NotLoggedInStack: { screen: NotLoggedInStack }
}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
