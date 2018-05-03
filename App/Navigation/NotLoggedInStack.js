import { StackNavigator } from 'react-navigation'
import Login from '../Containers/Login'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      // some options like title
    }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: styles.header
  }
})
