import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"

export default ({ data: { post } }) => (
  <Layout>
    <Post {...post} />
  </Layout>
)

export const pageQuery = graphql`
  query Post($path: String!) {
    post: markdownRemark(fields: { slug: { eq: $path } }) {
      id
      html
      frontmatter {
        name
        createdTime(formatString: "M/DD/YY")
        breadcrumb
        path
      }
      fields {
        slug
      }
    }
  }
`
