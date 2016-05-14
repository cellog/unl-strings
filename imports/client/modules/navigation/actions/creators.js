import { push } from 'react-router-redux'

import * as types from './types.js'

export function navigate(location) {
  return push(location)
}