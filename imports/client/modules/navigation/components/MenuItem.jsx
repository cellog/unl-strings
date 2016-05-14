import React from 'react'
import Link from '../../routing/components/Link.jsx'

const MenuItem = ({ active = false, text = 'Text', link = 'http://example.com', onClick = () => null}) =>
  link ? (
  <li className={active ? "active" : ''} onClick={onClick}>
    <Link href={link}>{text}{active ? <span className="sr-only">(current)</span> : '' }</Link>
  </li>
) : (
    <li className={active ? "active" : ''} onClick={onClick}>
      <Link href="">{text}{active ? <span className="sr-only">(current)</span> : '' }</Link>
    </li>
  );

export default MenuItem;
