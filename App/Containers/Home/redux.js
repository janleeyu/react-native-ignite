import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeTab: ['index']
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  loading: null,
  index: 0
})

/* ------------- Selectors ------------- */

export const HomeSelectors = {
  home: state => state
}

/* ------------- Reducers ------------- */

// request the data from an api
export const changeTab = (state, { index }) =>
  state.merge({
    index
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_TAB]: changeTab
})
