import Include from './components/Include.jsx'

import * as types from './actions/types.js'
import * as creators from './actions/creators.js'
import * as reducers from './actions/reducers.js'

const actions = { types, creators, reducers }

export {
  Include,

  actions
}