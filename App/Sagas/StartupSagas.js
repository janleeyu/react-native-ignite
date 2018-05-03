import { put, select } from 'redux-saga/effects'
import AppStateActions from '../Redux/AppStateRedux'
import LoggedInActions, { isLoggedIn } from '../Containers/Login/redux'
// exported to make available for tests

export const selectLoggedInStatus = (state) => isLoggedIn(state.login)
// process STARTUP actions
export function * startup (action) {
  yield put(AppStateActions.setRehydrationComplete())

  const isLoggedIn = yield select(selectLoggedInStatus)

  console.log('startup saga')
  console.log(isLoggedIn)
  if (isLoggedIn) {
    yield put(LoggedInActions.autoLogin())
  }
}
