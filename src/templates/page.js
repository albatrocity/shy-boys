import React from "react"
import Layout from "../components/layout"
import { Heading, Box } from "grommet"
import { graphql } from "gatsby"

export default ({ data: { page } }) => {
  return (
    <Layout>
      <Box as="header">
        <Heading>{page.document.name}</Heading>
      </Box>
      <Box as="article">
        <div
          dangerouslySetInnerHTML={{ __html: page.childMarkdownRemark.html }}
        />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GoogleDocPage($path: String!) {
    page: googleDocs(document: { path: { eq: $path } }) {
      id
      document {
        createdTime
        name
      }
      childMarkdownRemark {
        html
        frontmatter {
          name
          path
        }
      }
    }
  }
`
