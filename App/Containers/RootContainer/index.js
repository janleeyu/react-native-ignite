import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import ReduxNavigation from '../../Navigation/ReduxNavigation'
import ReduxPersist from '../../Config/ReduxPersist'
import StartupActions from '../../Redux/StartupRedux'

// Styles
import styles from './styles'

class RootContainer extends Component {
  componentDidMount () { // eslint-disable-line
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
