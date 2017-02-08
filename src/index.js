/*
 * @Author: fengyun2
 * @Date: 2016-12-18 14:18:26
 * @Last Modified by: fengyun2
 * @Last Modified time: 2017-02-08 19:34:17
 */
/*
import { app } from './app.js'

app.$mount('#app')

*/

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './redux_store'
import routes from './router'
import './config'

/**
 * browserHistory : 类似example.com/some/path
 * hashHistory : 类似example.com/#/some/path
 */

const oriHistory = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory
const store = configureStore()
const history = syncHistoryWithStore(oriHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
)
