import React, {PropTypes} from 'react'
import NavBarGroup from '../../navigation/components/NavBarGroup.jsx'
import MenuItem from '../../navigation/components/MenuItem.jsx'

const StudentNav = ({param = 'default', link = () => null}) => {
  return (
    <NavBarGroup>
      <MenuItem text="Departmentals" link="/departmental" onClick={link} />
      <MenuItem text="Juries" link="/juries" onClick={link} />
      <MenuItem text="Concerto Competition" link="/concerto" onClick={link} />
    </NavBarGroup>
  )
}


StudentNav.propTypes = {
  param: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired
}

export default StudentNav
