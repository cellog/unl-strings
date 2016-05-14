import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleWare from 'redux-thunk'
import createLogger from 'redux-logger'

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
        <Route path="/" component={modules.core.components.Layout}>
          <IndexRoute components={{
            main: modules.core.components.PublicMain,
            navigation: modules.core.components.PublicNav}} />
          <Route path="student" components={{
            main: modules.core.components.Student,
            navigation: modules.core.components.StudentNav}} />
          <Route path="faculty" components={{
            main: modules.core.components.Faculty,
            navigation: modules.core.components.FacultyNav}} />
        </Route>
      </Router>
    </Provider>
      , document.getElementById('root'))

})
