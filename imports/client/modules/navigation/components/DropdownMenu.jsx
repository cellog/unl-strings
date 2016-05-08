import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem.jsx'

class DropdownMenu extends Component {
  renderItems(items) {
    return items.map((item) => {
      switch (item.type) {
        case 'SEPARATOR' :
          return (
            <li role="separator" className="divider" />
          )
        default :
          return (
            <MenuItem {...item}/>
          )
      }
    })
  }
  render() {
    return (
      <li className={`dropdown ${this.props.open ? ' open' : ''}`} onClick={this.props.onClick}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
           aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
        <ul className="dropdown-menu">
          {this.renderItems(this.props.items)}
        </ul>
      </li>
    );
  }
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
