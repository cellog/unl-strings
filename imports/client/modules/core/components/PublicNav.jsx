import React, {PropTypes} from 'react'
import NavBarGroup from '../../navigation/components/NavBarGroup.jsx'
import RouterMenuItem from '../../navigation/containers/RouterMenuItem.jsx'

const PublicNav = () => {
  return (
    <NavBarGroup>
      <RouterMenuItem text="Departmentals" link="/departmental" />
      <RouterMenuItem text="Concerto Competition" link="/concerto" />
      <RouterMenuItem text="Students" link="/student" />
      <RouterMenuItem text="Faculty" link="/faculty" />
    </NavBarGroup>
  )
}

export default PublicNav
