import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box } from "grommet"
import { startCase } from "lodash/fp"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      pages: allGoogleDocs(
        filter: { document: { path: { regex: "/^((?!/posts/).)*$/" } } }
      ) {
        edges {
          node {
            document {
              path
              name
              id
            }
          }
        }
      }
    }
  `)

  const {
    pages: { edges },
  } = data

  return (
    <Box
      direction="row"
      align="center"
      justify="center"
      as="ul"
      gap="medium"
      pad="none"
      margin="0"
    >
      {edges.map(x => (
        <Box as="li">
          <Link
            to={x.node.document.path === "/home" ? "/" : x.node.document.path}
          >
            {startCase(x.node.document.name)}
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
