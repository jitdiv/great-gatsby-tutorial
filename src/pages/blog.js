import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { posts, posting } from './blog.module.scss';

const BlogPage = () => {

const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
       fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate (formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
`)

  // const {
  //   allMarkdownRemark: {
  //     edges
  //   }
  // } = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //             node {
  //               frontmatter {
  //                 title
  //                 date
  //               }
  //             fields {
  //               slug
  //             }
  //             html
  //             excerpt
  //           }
  //         }
  //       }
  //     }
  // `)

  return (
    <div>
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here:</p>

      <ol className={posts}>
        {
          data.allContentfulBlogPost.edges.map((post) => {
            return (
              <li className={posting} key={String(Math.random() * 1)}>
                <Link to={post.node.slug}>
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>
              </li>
            )
          })
        }
      </ol>


      {/* <ol className={posts}>
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
              <li className={posting} key={String(Math.random() * 1)}>
                <Link to={`${post.node.fields.slug}`}>
                  <h2>{title}</h2>
                  <p>{date}</p>
                </Link>
              </li>
            )
          })
        }
      </ol> */}


    </Layout>
    </div>
  )
}

export default BlogPage;