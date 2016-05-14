import React from 'react'

const MenuItem = ({ active = false, text = 'Text', link = 'http://example.com', onClick = () => null}) =>
  <li className={active ? "active" : ''}>
    <a onClick={(e) => {e.preventDefault(); onClick(link)}} href={link}>{text}{active ? <span className="sr-only">(current)</span> : '' }</a>
  </li>

export default MenuItem;
