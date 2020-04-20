import React from "react";
import Layout from "../components/layout";
import { Heading, Box } from "grommet";
import { graphql } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  ${p => {
    const { paragraph, anchor, global } = p.theme;
    return `
        margin-left: auto;
        margin-right: auto;
        max-width: ${global.size[paragraph.medium.maxWidth] ||
          paragraph.medium.maxWidth};
      `;
  }}
`;

export default ({ data: { page } }) => {
  return (
    <Layout>
      <Container>
        <Box as="header">
          <Heading>{page.document.name}</Heading>
        </Box>
        <Box as="article">
          <div
            dangerouslySetInnerHTML={{ __html: page.childMarkdownRemark.html }}
          />
        </Box>
      </Container>
    </Layout>
  );
};

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
`;
