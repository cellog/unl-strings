import React, {PropTypes} from 'react'
import NavBarGroup from '../../navigation/components/NavBarGroup.jsx'
import MenuItem from '../../navigation/components/MenuItem.jsx'
import { goToLink as link } from '../../routing/components/Link.jsx'

const StudentNav = ({param = 'default'}) => {
  return (
    <NavBarGroup>
      <MenuItem text="Departmentals" link="/departmental" onClick={link} />
      <MenuItem text="Juries" link="/juries" onClick={link} />
      <MenuItem text="Concerto Competition" link="/concerto" onClick={link} />
    </NavBarGroup>
  )
}


StudentNav.propTypes = {
  param: PropTypes.string.isRequired
}

export default StudentNav
