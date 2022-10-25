import React from 'react';
import { Link } from 'gatsby';
import { link, navList, activeNavItem } from './header.module.scss'

const Nav = () => {

  return (
    <ul className={navList}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Nav