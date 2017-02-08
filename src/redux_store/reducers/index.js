import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import settingState from './com'
import homeState from './home'
import detailState from './detail'

const rootReducer = combineReducers({
  routing,
  settingState,
  homeState,
  detailState
})

export default rootReducer
