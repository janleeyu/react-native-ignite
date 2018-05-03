import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Keyboard,
  LayoutAnimation,
  Metrics
} from 'react-native'
import Toast from 'react-native-easy-toast'
import { connect } from 'react-redux'

import { Images } from '../../Themes'
import styles from './styles'
import colors from '../../Themes/Colors'

import LoginActions from './redux'

class Login extends Component {
  componentWillReceiveProps (props) { // eslint-disable-line
    if (props.login_state.error) {
      this.refs.toast.show(props.login_state.error, 1000, props.doneToast())
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  render () {
    const { email, password, loading, token } = this.props.login_state
    console.log(loading)
    console.log(token)

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView>
          <View style={styles.centered}>
            <Image source={Images.logoWhite} style={styles.logo} />
          </View>
          <View style={styles.container}>
            <View style={styles.section} >
              <TextInput
                style={[styles.roundedBox, styles.loginInput, styles.sectionText]}
                placeholder='email'
                underlineColorAndroid={colors.clear}
                placeholderTextColor={colors.placeholder}
                autoCorrect={false}
                keyboardType='email-address'
                value={email}
                returnKeyType='next'
                onChangeText={email => this.props.onChangeEmail(email)}
                // onSubmitEditing={(event) => { this.refs.Password.focus() }}
              />
            </View>
            <View style={styles.section}>
              <TextInput
                style={[styles.roundedBox, styles.loginInput, styles.sectionText]}
                placeholder='password'
                placeholderTextColor={colors.placeholder}
                ref='Password'
                underlineColorAndroid={colors.clear}
                returnKeyType='done'
                value={password}
                onChangeText={password => this.props.onChangePassword(password)}
              />
            </View>
            <View style={styles.section}>
              <TouchableOpacity
                style={[styles.roundedBox, styles.smallBtn]}
                onPress={this.props.userLogin(email, password)}
              >
                <Text style={styles.smallBtnText}>login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <TouchableOpacity
                style={[styles.roundedBox]}
                // onPress={this.props.userLogin(email, password)}
              >
                <Text style={[styles.smallBtnText, styles.forgotText]}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
        <Toast
          ref='toast'
          style={styles.toast}
          position='bottom'
          positionValue={200}
          fadeInDuration={500}
          fadeOutDuration={1000}
          textStyle={styles.toastText}
        />
      </View>
    )
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeEmail: (email) => {
      dispatch(LoginActions.changeEmail(email))
    },
    onChangePassword: (password) => {
      dispatch(LoginActions.changePassword(password))
    },
    userLogin: (email, password) => () => {
      dispatch(LoginActions.login(email, password))
    },
    doneToast: () => {
      dispatch(LoginActions.toast())
    },
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    login_state: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
