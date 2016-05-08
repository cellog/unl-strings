import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MainLayout from '../Layout.jsx';
import NavBarGroup from '../../../navigation/components/NavBarGroup.jsx'

storiesOf('core.MainLayout', module)
  .add('default view', () => {
    const content = () => (<p>This is the content inside the Layout.</p>)
    return (
      <MainLayout content={content} />
    );
  })
  .add('nav layout', () => {
    const content = () => (<p>Navigation layout</p>)
    return (
      <MainLayout content={content} navcontent={() => (<NavBarGroup tag="div" extraclass="navbar-text"><div>hi</div></NavBarGroup>)} />
    )
  })

