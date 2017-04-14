/*
 * @Author: fengyun2
 * @Date: 2017-02-07 13:45:52
 * @Last Modified by: fengyun2
 * @Last Modified time: 2017-02-07 14:04:01
 */

/**
 * 路由(升级 react-router3.x --> react-router4.x 后暂时还没处理好，废弃了)
 */

 /**
 * require.ensure : 在需要的时候才下载依赖模块
 * require.ensure(dependencies:String[],callback:function([require]),[chunkName:String])
 * dependencies: 依赖的模块数组
 * callback: 回调函数，该函数调用时会传一个require参数
 * chunkName: 模块名，用于构建时生成文件时命名使用
 */
// export default [
//   {
//     path: '/',
//     getComponent (nextState, cb) {
//       require.ensure([], (require) => {
//         cb(null, require('./views/App').default)
//       })
//     },
//     indexRoute: {
//       getComponent (nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('./views/Home').default)
//         })
//       },
//     },
//     childRoutes: [
//       {
//         path: 'home',
//         getComponent (nextState, cb) {
//           require.ensure([], (require) => {
//             cb(null, require('./views/Home').default)
//           })
//         },
//       },
//       {
//         path: 'detail',
//         getComponent (nextState, cb) {
//           require.ensure([], (require) => {
//             cb(null, require('./views/Detail').default, 'detail/:id')
//           })
//         },
//       }
//     ]
//   }
// ]

import App from './views/App'
import Home from './views/Home'
import Detail from './views/Detail'

export default [
  {
    path: '/',
    component: App
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  }
]
