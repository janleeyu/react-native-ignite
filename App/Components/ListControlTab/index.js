import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

import styles from './styles'

export default class ListControlTab extends Component {
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
    const { changeTab, index } = this.props
    return (
      <View style={styles.container}>
        <View>
          <SegmentedControlTab
            values={['AUDITS', 'REPORTS']}
            selectedIndex={index}
            onTabPress={changeTab}
            tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
              />
        </View>
      </View>
    )
  }
}
