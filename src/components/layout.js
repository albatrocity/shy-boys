/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Grommet, Box, ResponsiveContext } from "grommet";
import styled from "styled-components";

import theme from "./theme";
import SocialLinks from "./SocialLinks";
import BrandSidebar from "./BrandSidebar";
import Clown from "./Clown";
import Butterfly1 from "./Butterfly1";
import Butterfly2 from "./Butterfly2";
import SiteMeta from "./SiteMeta";
import "./layout.css";

const Background = styled(Box)`
  background-position: 0 0;
  background-repeat: repeat;
  background-size: auto;
`;

const SiteWrapper = styled(Box)`
  max-width: 1600px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 58px;
  padding-right: 8px;
  @media only screen ${p =>
      `and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
    height: auto;
    padding-bottom: 75px;
    padding-right: 0;
  }
`;

const MainContainer = styled(Box)`
  position: relative;
  height: 100vh;
  @media only screen ${p =>
      `and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
    height: auto;
  }
`;

const Layout = ({ children, wrapper = true }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      bg: file(relativePath: { eq: "bricks.png" }) {
        id
        publicURL
      }
      butterfly1: file(relativePath: { eq: "butterfly1.png" }) {
        publicURL
      }
      butterfly2: file(relativePath: { eq: "butterfly2.png" }) {
        publicURL
      }
      butterfly3: file(relativePath: { eq: "butterfly3.png" }) {
        publicURL
      }
    }
  `);

  return (
    <Grommet theme={theme}>
      <Background background={`url(${data.bg.publicURL})`} fill>
        <SiteWrapper>
          <Box direction="row-responsive" fill>
            <BrandSidebar />
            <Box className="main-wrapper" flex={{ grow: 1 }}>
              <MainContainer direction="column" className="main-container">
                <Clown />
                <Butterfly1 />
                <Butterfly2 />
                <Box
                  className="main-pad"
                  direction="column"
                  flex={{ grow: 1, shrink: 1 }}
                  margin="medium"
                  height="100%"
                >
                  <Box
                    flex={{ shrink: 0 }}
                    pad={{ vertical: "medium" }}
                    align="end"
                  >
                    <SocialLinks />
                  </Box>
                  <Box
                    direction="row-responsive"
                    background="light"
                    fill="vertical"
                  >
                    <Box
                      as="main"
                      overflow="auto"
                      flex={{ grow: 1, shrink: 1 }}
                      pad={{
                        vertical: "medium",
                        horizontal: "medium",
                        right: "small"
                      }}
                      width="100%"
                    >
                      {wrapper ? <div>{children}</div> : <>{children}</>}
                    </Box>
                    <SiteMeta />
                  </Box>
                </Box>
              </MainContainer>
            </Box>
          </Box>
        </SiteWrapper>
      </Background>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
