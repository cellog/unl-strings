import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MainLayout from '../Layout.jsx';
import NavBarGroup from '../../../navigation/components/NavBarGroup.jsx'

storiesOf('core.MainLayout', module)
  .add('default view', () => {
    return (
      <MainLayout content={content}>
        <p>This is the content inside the Layout.</p>
      </MainLayout>
    );
  })
  .add('nav layout', () => {
    return (
      <MainLayout navcontent={<NavBarGroup tag="div" extraclass="navbar-text"><div>hi</div></NavBarGroup>}>
        <p>Navigation layout</p>
      </MainLayout>
    )
  })

