import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
    <footer>
      <p>{data.site.siteMetadata.author} Copyright 2022</p>
    </footer>
  )
}

export default Footer;