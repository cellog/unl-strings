import '../imports/client/main.less'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import Layout from '../imports/client/modules/core/components/Layout.jsx'
import { createStore } from 'redux'
import './index.html'

const store = createStore((state = {}, action) => {
  return state
})

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById('root')
  )
})
