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

// import { Router, browserHistory, hashHistory } from 'react-router'
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './redux_store'
// import routes from './router'
import './config'

/**
 * browserHistory : 类似example.com/some/path
 * hashHistory : 类似example.com/#/some/path
 */

// const oriHistory = process.env.NODE_ENV !== 'production' ? browserHistory : HashRouter
const oriHistory = HashRouter
const store = configureStore()
// const history = syncHistoryWithStore(oriHistory, store)

// render(
//   <Provider store={store}>
//     <Router routes={routes}>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// )

import App from './views/App'
import Home from './views/Home'
import Detail from './views/Detail'

render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/detail' component={Detail} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('app')
)
