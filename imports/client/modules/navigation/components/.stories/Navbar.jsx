import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navbar from '../Navbar.jsx';

storiesOf('core.Navbar', module)
  .add('default view', () => {
    return (
      <Navbar />
    );
  })
  .add('extra menu item', () => {
    return (
      <Navbar>
        <div className="navbar-text">hello</div>
      </Navbar>
    )
  });
