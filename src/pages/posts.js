import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Posts" />
    {edges.map(x => (
      <Post key={x.node.id} {...x.node} />
    ))}
  </Layout>
)

export default PostsPage

export const query = graphql`
  query Posts {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/posts/" } } }
      sort: { fields: frontmatter___createdTime, order: DESC }
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            name
            createdTime(formatString: "M/DD/YY")
            breadcrumb
          }
        }
      }
    }
  }
`
