import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navbar from '../Navbar.jsx';
import MenuItem from '../MenuItem.jsx';
import DropdownMenu from '../DropdownMenu.jsx';
import NavBarGroup from '../NavBarGroup.jsx';

storiesOf('core.Navbar', module)
  .add('default view', () => {
    return (
      <Navbar />
    );
  })
  .add('full nav bar', () => {
    let open = false
    return (
      <Navbar>
        <NavBarGroup>
          <MenuItem active text="Link" />
          <MenuItem />
          <DropdownMenu open onClick={action('dropdown')}
            items={[
              {type: 'MENUITEM', link: '#', text: 'Action'},
              {type: 'MENUITEM', link: '#', text: 'Another Action'},
              {type: 'MENUITEM', link: '#', text: 'Something else Here'},
              {type: 'SEPARATOR'},
              {type: 'MENUITEM', link: '#', text: 'Separated Link'},
              {type: 'SEPARATOR'},
              {type: 'MENUITEM', link: '#', text: 'One More Separated Link'}
            ]}
          />
        </NavBarGroup>
        <NavBarGroup position="left" tag="form" extraclass="navbar-form" role="search">
          <div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </NavBarGroup>
        <NavBarGroup position="right">
          <MenuItem text="Link" />
          <DropdownMenu open onClick={action('dropdown')}
                        items={[
              {type: 'MENUITEM', link: '#', text: 'Action'},
              {type: 'MENUITEM', link: '#', text: 'Another Action'},
              {type: 'MENUITEM', link: '#', text: 'Something else Here'},
              {type: 'SEPARATOR'},
              {type: 'MENUITEM', link: '#', text: 'Separated Link'},
            ]}
          />
        </NavBarGroup>
      </Navbar>
    )
  });
