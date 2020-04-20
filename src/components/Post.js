import React from "react";
import { graphql } from "gatsby";
import { Heading, Box, Markdown } from "grommet";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StyledHeading = styled(Heading)`
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

const PostContainer = styled(Box)`
    ${p => {
      const { paragraph, anchor, global } = p.theme;
      return `
        margin-left: auto;
        margin-right: auto;

        p, iframe {
          font-size: ${paragraph.medium.size};
          line-height: ${paragraph.medium.height};
          max-width: ${global.size[paragraph.medium.maxWidth] ||
            paragraph.medium.maxWidth};
          ${paragraph.medium.extend}

          @media only screen ${`and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
            font-size: ${paragraph.small.size};
            font-size: ${paragraph.small.size};
            line-height: ${paragraph.small.height};
            max-width: ${paragraph.small.maxWidth};
          }
        }
        a {
          color: ${global.colors[anchor.color.light] || anchor.color.light};
          font-weight: ${anchor.color.fontWeight};
          text-decoration: ${anchor.textDecoration};
          &:hover {
            text-decoration: ${anchor.hover.textDecoration}
          }
          &:visited {
            color: ${global.colors[anchor.color.light] || anchor.color.light};
          }
        }

      `;
    }}
  }
`;

const Post = ({ html, frontmatter, fields, rawMarkdownBody }) => (
  <PostContainer
    border={{ side: "bottom", style: "dashed" }}
    pad={{ bottom: "large" }}
  >
    <article>
      <StyledHeading width="medium">
        <Link to={fields.slug}>{frontmatter.name}</Link>
      </StyledHeading>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  </PostContainer>
);

export default Post;
