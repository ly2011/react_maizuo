import * as types from '../types'

const initialState = {
  title: '卖座电影',
  loading: 0,
  leftNavState: false,
  pathname: '/'
}

export default function settingState (state = initialState, action) {
  switch (action.type) {
  case types.COM_CONF:
    return Object.assign({}, state, {
      ...state,
      ...action.settings
    })
  case types.COM_LOADING_STATUS:
    return Object.assign({}, state, {
      ...state,
      loading: action.loading
    })
  case types.CHANGE_LEFTNAV_STATUS:
    return Object.assign({}, state, {
      ...state,
      leftNavState: action.leftNavState
    })
  case types.CHANGE_PATHNAME:
    return Object.assign({}, state, {
      ...state,
      pathname: action.data
    })
  default:
    return state
  }
}
