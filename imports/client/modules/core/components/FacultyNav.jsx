import React, {PropTypes} from 'react'
import NavBarGroup from '../../navigation/components/NavBarGroup.jsx'
import RouterMenuItem from '../../navigation/containers/RouterMenuItem.jsx'

const FacultyNav = () => {
  return (
    <NavBarGroup>
      <RouterMenuItem text="Departmentals" link="/departmental" />
      <RouterMenuItem text="Juries" link="/juries" />
      <RouterMenuItem text="Concerto Competition" link="/concerto" />
    </NavBarGroup>
  )
}

export default FacultyNav
