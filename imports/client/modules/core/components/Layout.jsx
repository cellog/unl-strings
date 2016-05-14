import React from 'react';
import Navbar from '../../navigation/components/Navbar.jsx';

const Layout = ({children = null, navcontent = null }) => (
  <div>
    <header>
      <h1>UNL Strings Area</h1>
      <Navbar>
        {navcontent}
      </Navbar>
    </header>

    <div>
      {children}
    </div>

    <footer>
      <small>Built by <a href='http://gregorybeaver.com'>Gregory Beaver</a> &amp; Meteor/Redux.</small>
    </footer>
  </div>
);

export default Layout;
