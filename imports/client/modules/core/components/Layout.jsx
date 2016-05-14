import React from 'react';
import Navbar from '../../navigation/components/Navbar.jsx';

const Layout = ({main = null, navigation = null }) => (
  <div>
    <header>
      <h1>UNL Strings Area</h1>
      <Navbar>
        {navigation}
      </Navbar>
    </header>

    <div>
      {main}
    </div>

    <footer>
      <small>Built by <a href='http://gregorybeaver.com'>Gregory Beaver</a> &amp; Meteor/Redux.</small>
    </footer>
  </div>
);

export default Layout;
