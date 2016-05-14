import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import StudentNav from '../StudentNav.jsx';
import Navbar from '../../../navigation/components/Navbar.jsx';

storiesOf('core.StudentNav', module)
  .add('default view', () => {
    return (
      <Navbar>
        <StudentNav />
      </Navbar>
    )
  })

