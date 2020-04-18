import React from "react";
import { graphql } from "gatsby";
import { Heading, Box, Markdown } from "grommet";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PostContainer = styled(Box)`
    ${p => {
      const { paragraph, anchor, global } = p.theme;
      return `
        p {
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
  <PostContainer border={{ side: "bottom", style: "dashed" }}>
    <article>
      <Heading>
        <Link to={fields.slug}>{frontmatter.name}</Link>
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  </PostContainer>
);

export default Post;
