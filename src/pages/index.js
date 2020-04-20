import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/Post";
import IndexPageContent from "../components/IndexPageContent";

const IndexPage = ({ data: { page, posts } }) => {
  return (
    <Layout wrapper={false}>
      <SEO />
      <IndexPageContent content={page.childMarkdownRemark.html} />
    </Layout>
  );
};

export default IndexPage;

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
`;
