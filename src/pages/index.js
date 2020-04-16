import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import Releases from "../components/Releases"
import Shows from "../components/Shows"
import { Box } from "grommet"

const IndexPage = ({ data: { page, posts } }) => (
  <Layout>
    <SEO title="Home" />
    <Box direction="row-responsive" flex={{ grow: 1, shrink: 1 }} gap="small">
      <Box direction="column" flex="grow">
        <Box
          dangerouslySetInnerHTML={{ __html: page.childMarkdownRemark.html }}
          flex={{ grow: 1 }}
        ></Box>
        <Box>
          <Shows />
        </Box>
      </Box>
      <Box
        border={{ side: "left", style: "dashed" }}
        pad={{ left: "small" }}
        width="300px"
      >
        <Releases />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePage {
    page: googleDocs(document: { path: { eq: "/home" } }) {
      id
      childMarkdownRemark {
        html
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/posts/" } } }
      sort: { fields: frontmatter___createdTime, order: DESC }
      limit: 10
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
