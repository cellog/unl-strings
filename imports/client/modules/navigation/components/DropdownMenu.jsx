import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem.jsx'

const DropdownMenu = ({onClick = () => null, open = false, items = [], MyMenuItem = MenuItem}) => {
  const renderItems = (items) => {
    return items.map((item) => {
      switch (item.type) {
        case 'SEPARATOR' :
          return (
            <li role="separator" className="divider" />
          )
        default :
          return (
            <MyMenuItem {...item}/>
          )
      }
    })
  }

  return (
    <li className={`dropdown${open ? ' open' : ''}`} onClick={onClick}>
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
         aria-haspopup="true" aria-expanded={open ? "true" : "false"}>Dropdown <span className="caret" /></a>
      <ul className="dropdown-menu">
        {renderItems(items)}
      </ul>
    </li>
  )
}

DropdownMenu.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    link: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string.isRequired
  }))
};

export default DropdownMenu;
