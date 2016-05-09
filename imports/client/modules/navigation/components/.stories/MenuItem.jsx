import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MenuItem from '../MenuItem.jsx';

storiesOf('navigation.MenuItem', module)
  .add('default view', () => {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <MenuItem />
        </ul>
      </nav>
    );
  })
  .add('active', () => {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <MenuItem active />
        </ul>
      </nav>
    );
  })
  .add('no link', () => {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <MenuItem active onClick={action('clicked')} link={null} />
        </ul>
      </nav>
    )
  })
