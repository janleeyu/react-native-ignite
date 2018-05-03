import React, { Component } from 'react'
import {BackHandler, Platform} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers'
import {connect} from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends Component {
  componentWillMount() { // eslint-disable-line
    if (Platform.OS === 'ios') {
      return
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      const {
        dispatch
        // nav
      } = this.props
      // change to whatever is your first screen, otherwise unpredictable results may
      // occurrr
      // if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
      //   return false
      // }
      // if (shouldCloseApp(nav)) return false
      dispatch({type: 'Navigation/BACK'})
      return true
    })
  }

  componentWillUnmount() { // eslint-disable-line
    if (Platform.OS === 'ios') {
      return
    }
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    const { dispatch, nav } = this.props
    const addListener = createReduxBoundAddListener('root')
    return <AppNavigation
      navigation={
        addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })} />
  }
}

const mapStateToProps = state => ({
  nav: state.nav

})
export default connect(mapStateToProps)(ReduxNavigation)
