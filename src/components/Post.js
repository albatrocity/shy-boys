import React from "react"
import { graphql } from "gatsby"
import { Heading, Box } from "grommet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ html, frontmatter, fields }) => (
  <Box as="article">
    <Heading>
      <Link to={fields.slug}>{frontmatter.name}</Link>
    </Heading>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Box>
)

export default Post
