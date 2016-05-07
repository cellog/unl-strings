import React from 'react';
import Navbar from '../../navigation/components/Navbar.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <h1>UNL Strings Area</h1>
      <Navbar />
    </header>

    <div>
      {content()}
    </div>

    <footer>
      <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
    </footer>
  </div>
);

export default Layout;
