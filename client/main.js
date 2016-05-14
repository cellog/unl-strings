import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleWare from 'redux-thunk'
import createLogger from 'redux-logger'

import Layout from '../imports/client/modules/core/components/Layout.jsx'
import StudentNav from '../imports/client/modules/core/components/StudentNav.jsx'
import Student from '../imports/client/modules/core/components/Student.jsx'
import PublicNav from '../imports/client/modules/core/components/PublicNav.jsx'
import PublicMain from '../imports/client/modules/core/components/PublicMain.jsx'

import * as modules from '../imports/client/modules'

import '../imports/client/main.less'

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

Meteor.startup(() => {

  const middleware = routerMiddleware(browserHistory)
  const store = createStore(combineReducers({
      routing: routerReducer
    }),
    compose(applyMiddleware(middleware, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f))

  const history = syncHistoryWithStore(browserHistory, store)

  render(

    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute components={{main: PublicMain, navigation: PublicNav}} />
          <Route path="student" components={{main: Student, navigation: StudentNav}} />
        </Route>
      </Router>
    </Provider>
      , document.getElementById('root'))

})
