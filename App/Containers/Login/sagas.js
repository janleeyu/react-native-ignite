import { AsyncStorage } from 'react-native'
import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import LoginActions from './redux'

// attempts to login
export function * login (api, action) {
  const {email, password} = action
  const response = yield call(api.userLogin, email, password)
  if (response.data.success) {
    // dispatch failure
    console.log(response.data)
    AsyncStorage.setItem('TOKEN', response.data.token)
    yield put(LoginActions.loginSuccess(response.data.token, response.data.success))
    yield put(NavigationActions.navigate({ routeName: 'Home' }))
  } else {
    // dispatch successful logins
    yield put(LoginActions.loginError(response.data.error))
  }
}
