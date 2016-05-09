import React from 'react';

const NavBarGroup = ({ position = '', tag = 'ul', extraclass = '', children, ...stuff}) => {
  let pos
  switch (position) {
    case 'left' :
      pos = ' navbar-left'
      break
    case 'right' :
      pos = ' navbar-right'
      break
    default :
      pos = ''
      break
  }
  let ec = extraclass ? ` ${extraclass}` : ''
  return React.DOM[tag].call(React.DOM[tag], {
    className: `nav navbar-nav${pos}${ec}`,
    ...stuff
  }, children)
}

export default NavBarGroup;
