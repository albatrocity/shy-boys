/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Box, ResponsiveContext } from "grommet"
import styled from "styled-components"

import theme from "./theme"
import SocialLinks from "./SocialLinks"
import BrandSidebar from "./BrandSidebar"
import Footer from "./Footer"
import "./layout.css"

const Background = styled(Box)`
  background-position: 0 0;
  background-repeat: repeat;
  background-size: auto;
`

const SiteWrapper = styled(Box)`
  max-width: 1600px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  @media only screen ${p =>
      p.theme.global.breakpoints.small.value &&
      `and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
    height: auto;
  }
`

const MainContainer = styled(Box)`
  height: 100vh;
  @media only screen ${p =>
      p.theme.global.breakpoints.small.value &&
      `and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
    height: auto;
  }
`

const Layout = ({ children }) => {
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
    }
  `)

  return (
    <Grommet theme={theme}>
      <Background background={`url(${data.bg.publicURL})`} fill>
        <SiteWrapper>
          <Box direction="row-responsive" fill>
            <BrandSidebar />
            <Box className="main-wrapper" flex={{ grow: 1 }}>
              <MainContainer direction="column" className="main-container">
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
                        right: "small",
                      }}
                      width="100%"
                    >
                      {children}
                    </Box>
                    <Box
                      as="footer"
                      margin={{ vertical: "small" }}
                      pad={{ horizontal: "small" }}
                      border={{ side: "left", style: "dashed" }}
                      width="medium"
                    >
                      <Box flex={{ grow: 1 }}>Merch</Box>
                      <Footer />
                    </Box>
                  </Box>
                </Box>
              </MainContainer>
            </Box>
          </Box>
        </SiteWrapper>
      </Background>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
