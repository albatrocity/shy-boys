import React from "react";
import { graphql } from "gatsby";
import { Box } from "grommet";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/Post";

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout>
    <SEO title="Posts" />
    <div>
      <Box gap="large">
        {edges.map(x => (
          <Post key={x.node.id} {...x.node} />
        ))}
      </Box>
    </div>
  </Layout>
);

export default PostsPage;

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
          rawMarkdownBody
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
`;
