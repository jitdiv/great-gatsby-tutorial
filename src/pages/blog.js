import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const {
    allMarkdownRemark: {
      edges
    }
  } = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
       edges {
          node {
            frontmatter {
              title
              date
            }
          html
          excerpt
        }
      }
    }
  }
  `)

  return (
    <div>
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here:</p>
      <ol>
        {
          edges.map((post) => {
            const {
             node: {
               frontmatter: {
                 title,
                 date
               }
             }
            } = post

            return (
              <li key={String(Math.random() * 1)}>
                <h2>{title}</h2>
                <p>{date}</p>
              </li>
            )
          })
        }
      </ol>
    </Layout>
    </div>
  )
}

export default BlogPage;