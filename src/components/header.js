import React from 'react';
import { Link } from 'gatsby';

import Nav from './nav'
import { link, header, title } from './header.module.scss'


const Header = () => {
  return (
    <header className={header}>
      <h1><Link className={title} to="/">Sample Gatsby Site</Link></h1>
      <Nav />
    </header>
  )
}

export default Header

