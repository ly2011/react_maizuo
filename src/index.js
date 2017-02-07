/*
 * @Author: fengyun2
 * @Date: 2016-12-18 14:18:26
 * @Last Modified by: fengyun2
 * @Last Modified time: 2017-02-07 14:02:26
 */
/*
import { app } from './app.js'

app.$mount('#app')

*/

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, hashHistory } from 'react-router'
import routes from './router'
import './config'

/**
 * browserHistory : 类似example.com/some/path
 * hashHistory : 类似example.com/#/some/path
 */

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory

render(
  <Router history={history} routes={routes}>
  </Router>,
  document.getElementById('app')
)
