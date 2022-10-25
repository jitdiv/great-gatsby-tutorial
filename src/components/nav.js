import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {

  const ulStyles = {listStyle: 'none'}
  const liStyles ={display:'inline', marginLeft: '5px'}

  return (
    <ul style={ulStyles}>
      <li style={liStyles}><Link to="/">Home</Link></li>
      <li style={liStyles}><Link to="/about">About</Link></li>
      <li style={liStyles}><Link to="/blog">Blog</Link></li>
      <li style={liStyles}><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Nav