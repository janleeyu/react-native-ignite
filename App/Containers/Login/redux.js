
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  toast: null,
  changeEmail: ['email'],
  changePassword: ['password'],
  login: ['email', 'password'],
  loginSuccess: ['token', 'success'],
  loginError: ['error'],
  logout: null,
  autoLogin: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  error: null,
  loading: false,
  email: 'ashley.stephenson@kodiakrating.com',
  password: 'a',
  token: null
})

/* ------------- Reducers ------------- */

export const toast = (state) =>
  state.merge({
    error: null
  })

export const changeEmail = (state, { email }) =>
  state.merge({
    email
  })

export const changePassword = (state, { password }) =>
  state.merge({
    password
  })

// we're attempting to login
export const login = (state, { email, password }) =>
  state.merge({
    email,
    password,
    loading: true
  })

// we've successfully logged in
export const loginSuccess = (state, { token }) =>
  state.merge({
    token: token,
    loading: false,
    error: null
  })

// we've had a problem logging in
export const loginError = (state, { error }) =>
  state.merge({ loading: false, error })

// we've logged out
export const logout = (state) => INITIAL_STATE

// startup saga invoked autoLogin
export const autoLogin = (state) => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOAST]: toast,
  [Types.CHANGE_EMAIL]: changeEmail,
  [Types.CHANGE_PASSWORD]: changePassword,
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_ERROR]: loginError,
  [Types.LOGOUT]: logout,
  [Types.AUTO_LOGIN]: autoLogin
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (loginState) => loginState.token !== null
