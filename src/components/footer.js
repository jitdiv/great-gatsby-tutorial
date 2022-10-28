import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { footer } from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return(
    <footer className={footer}>
      <p>{data.site.siteMetadata.author} Copyright 2022</p>
    </footer>
  )
}

export default Footer;