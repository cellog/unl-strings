import React, { PropTypes } from 'react'
import { Accounts } from 'meteor/accounts-base'
import NavBarGroup from '../../navigation/components/NavBarGroup.jsx'
import RouterMenuItem from '../../navigation/containers/RouterMenuItem.jsx'
import MenuItem from '../../navigation/components/MenuItem.jsx'
import Include from '../../user/components/Include.jsx'

const PublicNav = () => {
  return (
    <div>
    <NavBarGroup>
      <RouterMenuItem text="Departmentals" link="/departmental" />
      <RouterMenuItem text="Concerto Competition" link="/concerto" />
      <RouterMenuItem text="Students" link="/student" />
      <RouterMenuItem text="Faculty" link="/faculty" />
    </NavBarGroup>
    <NavBarGroup position="right">
      <MenuItem text="Log in" link="" onClick={() => Meteor.loginWithSaml()} />
    </NavBarGroup>
    </div>
  )
}

export default PublicNav
