import { Component, PropTypes } from 'react';
import MenuItem from './MenuItem.jsx'

class DropdownMenu extends Component {
  renderItems(items) {
    items.forEach((item) => {
      if (item.separator) {
        return (
          <li role="separator" className="divider" />
        )
      }
      return <MenuItem {...item}/>
    })
  }
  render() {
    return (
      <ul className="dropdown-menu">
        {this.renderItems(this.props.items)}
      </ul>
    );
  }
}

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    link: PropTypes.string,
    text: PropTypes.string,
    separator: PropTypes.bool
  }))
};

export default DropdownMenu;
