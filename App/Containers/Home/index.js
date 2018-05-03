import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import TopBar from '../../Components/TopBar'
import ListControlTab from '../../Components/ListControlTab'

import Assessments from '../Assessments'
import Reports from '../Reports'

import HomeActions from './redux'
import LoginActions from '../Login/redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './styles'

class Home extends Component {
  render () {
    const { index } = this.props.home_state
    return (
      <ScrollView>
        <TopBar
          logout={this.props.onLogout}
        />
        <ListControlTab
          index={index}
          changeTab={this.props.onChangeTab}
        />
        {
          !index ? <Assessments /> : <Reports />
        }
      </ScrollView>
    )
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeTab: (index) => {
      dispatch(HomeActions.changeTab(index))
    },
    onLogout: () => {
      dispatch(LoginActions.logout())
    },
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    home_state: state.home
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
