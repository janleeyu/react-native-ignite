import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../../Themes'

import styles from './styles'

export default class TopBar extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { logout } = this.props
    return (
      <View style={styles.topBar}>
        <View style={styles.left}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={Images.logoWhite} />
          </View>
          <View style={styles.onsite}>
            <Text style={styles.onsiteText}>ONSITE</Text>
          </View>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity style={[styles.roundedBox, styles.logoutButton]} onPress={logout}>
            <Text style={styles.logoutText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
