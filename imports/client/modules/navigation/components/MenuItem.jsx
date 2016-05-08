import React from 'react';

const MenuItem = ({ active = false, text = 'Text', link = 'http://example.com', onClick = () => null}) =>
  link ? (
  <li className={active ? "active" : ''} onClick={onClick}>
    <a href={link}>{text}{active ? <span className="sr-only">(current)</span> : '' }</a>
  </li>
) : (
    <li className={active ? "active" : ''} onClick={onClick}>
      <a href="" onClick={(e) => {e.preventDefault()}}>{text}{active ? <span className="sr-only">(current)</span> : '' }</a>
    </li>
  );

export default MenuItem;
