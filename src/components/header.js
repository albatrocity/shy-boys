import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box } from "grommet"

import Navigation from "./Navigation"

const Header = ({ siteTitle }) => (
  <Box as="header">
    <Navigation />
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
