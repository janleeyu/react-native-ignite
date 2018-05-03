import { StackNavigator } from 'react-navigation'
import Home from '../Containers/Home'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  Home: {
    screen: Home
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})
