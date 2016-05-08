import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NavBarGroup from '../NavBarGroup.jsx';
import MenuItem from '../MenuItem.jsx';

storiesOf('core.NavBarGroup', module)
  .add('default view', () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <NavBarGroup>
            <MenuItem />
          </NavBarGroup>
        </div>
      </nav>
    );
  })
  .add('right', () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <NavBarGroup>
            <MenuItem />
          </NavBarGroup>
          <NavBarGroup position="right">
            <MenuItem />
          </NavBarGroup>
        </div>
      </nav>
    )
  })
  .add('left', () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <NavBarGroup>
            <MenuItem />
          </NavBarGroup>
          <NavBarGroup position="left">
            <MenuItem />
          </NavBarGroup>
        </div>
      </nav>
    )
  })
  .add('form tag', () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <NavBarGroup>
            <MenuItem />
          </NavBarGroup>
          <NavBarGroup position="left" tag="form" extraclass="navbar-form">
            <div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </NavBarGroup>
        </div>
      </nav>
    )
  })
