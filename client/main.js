import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import Layout from '../imports/client/modules/core/components/Layout.jsx'
import StudentNav from '../imports/client/modules/core/components/StudentNav.jsx'
import Student from '../imports/client/modules/core/components/Student.jsx'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import '../imports/client/main.less'

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

Meteor.startup(() => {
  const store = createStore(combineReducers({
    routing: routerReducer
  }))

  const history = syncHistoryWithStore(browserHistory, store)

  render(

    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <Route path="student" component={{main: Student, navigation: StudentNav}} />
        </Route>
      </Router>
    </Provider>
      , document.getElementById('root'))

})
