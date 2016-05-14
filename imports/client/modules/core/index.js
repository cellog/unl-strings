import Faculty from './components/Faculty.jsx'
import FacultyNav from './components/FacultyNav.jsx'
import Layout from './components/Layout.jsx'
import PublicMain from './components/PublicMain.jsx'
import PublicNav from './components/PublicNav.jsx'
import Student from './components/Student.jsx'
import StudentNav from './components/StudentNav.jsx'

import * as types from './actions/types.js'
import * as creators from './actions/creators.js'
import * as reducers from './actions/reducers.js'

const actions = { types, creators, reducers }

export {
  Faculty,
  FacultyNav,
  Layout,
  PublicMain,
  PublicNav,
  Student,
  StudentNav,

  actions
}