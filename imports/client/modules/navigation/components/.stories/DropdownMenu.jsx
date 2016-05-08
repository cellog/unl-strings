import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DropdownMenu from '../DropdownMenu.jsx';

storiesOf('core.DropdownMenu', module)
  .add('default view', () => {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <DropdownMenu onClick={action('clicked')} items={[
              {
                type: 'MENUITEM',
                active: false,
                link: '/example',
                text: 'First'
              },
              {
                type: 'SEPARATOR'
              },
              {
                type: 'MENUITEM',
                active: false,
                link: '/thing',
                text: 'Second'
              }
            ]} />
        </ul>
      </nav>
    );
  })
  .add('open', () => {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <DropdownMenu open onClick={action('clicked')} items={[
            {
              type: 'MENUITEM',
              active: false,
              link: '/example',
              text: 'First'
            },
            {
              type: 'SEPARATOR'
            },
            {
              type: 'MENUITEM',
              active: false,
              link: '/thing',
              text: 'Second'
            }
          ]} />
        </ul>
      </nav>
    )
  })
  .add('hovered menu item', () => {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <DropdownMenu open onClick={action('clicked')} items={[
              {
                type: 'MENUITEM',
                active: true,
                link: '/example',
                text: 'First'
              },
              {
                type: 'SEPARATOR'
              },
              {
                type: 'MENUITEM',
                active: false,
                link: '/thing',
                text: 'Second'
              }
            ]} />
        </ul>
      </nav>
    )
  });
