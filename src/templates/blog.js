import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout';

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `



export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`
const image = getImage()
const Bold = ({ children }) => <strong>{children}</strong>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData } = node.data.target
      return <GatsbyImage image={gatsbyImageData} />
      // return (
      //   <>
      //     <img src={node.data.target.gatsbyImageData.images.fallback.src} />
      //   </>
      // )
    },
    // "embedded-asset-block": node => {
    //   const { gatsbyImageData } = node.data.target
    //   if (!gatsbyImageData) {
    //     return null
    //   }
    //   return <GatsbyImage image={image} />
    // },
  },
}


const Blog = (props) => {
  const { body } = props.data.contentfulBlogPost

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>{body && renderRichText(body, options)}</div>
  </Layout>

    // <Layout>
    //   <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    //   <p>{props.data.markdownRemark.frontmatter.date}</p>
    //   <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    // </Layout>
  )
}

export default Blog