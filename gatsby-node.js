/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { kebabCase, includes } = require("lodash/fp")

exports.onCreateNode = async ({ node, getNode, actions }) => {
  // prepend date to post slugs
  const { createNodeField } = actions
  if (
    node.internal.type === `MarkdownRemark` &&
    includes("/posts/", node.frontmatter.path) &&
    node.frontmatter.createdTime
  ) {
    const date = new Date(node.frontmatter.createdTime)
    const dateString = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`

    await createNodeField({
      node,
      name: `slug`,
      value: `/posts/${dateString}-${kebabCase(node.frontmatter.name)}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // Pages
  const pages = await graphql(
    `
      {
        allGoogleDocs {
          nodes {
            document {
              path
            }
          }
        }
      }
    `
  )
  await pages.data.allGoogleDocs.nodes.forEach(({ document }, index) => {
    actions.createPage({
      path: document.path,
      component: path.resolve(`./src/templates/page.js`),
    })
  })

  // Posts
  const posts = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { path: { regex: "/posts/" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  await posts.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
    })
  })
}
