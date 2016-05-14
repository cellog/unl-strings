import { connect } from 'react-redux'

import MenuItem from '../components/MenuItem.jsx'
import * as actions from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (link) => dispatch(actions.creators.navigate(link))
  }
}

const RouterMenuItem = connect(
  () => ({}),
  mapDispatchToProps
)(MenuItem)

export default RouterMenuItem