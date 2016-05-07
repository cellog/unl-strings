import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DropdownMenu from '../DropdownMenu.jsx';

storiesOf('core.DropdownMenu', module)
  .add('default view', () => {
    return (
      <DropdownMenu />
    );
  })
  .add('extra menu item', () => {
    return (
      <Navbar>
        <div className="navbar-text">hello</div>
      </Navbar>
    )
  });
