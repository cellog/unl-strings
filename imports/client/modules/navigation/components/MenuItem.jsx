import React from 'react';

const MenuItem = ({ active = false, text, link }) => (
  <li className={active ? "active" : ''}>
    <a href={link}>{text}</a>
  </li>
);

export default MenuItem;
