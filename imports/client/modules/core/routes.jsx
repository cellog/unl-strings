import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/Layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>hi</div>)
    });
    }
  });
}
