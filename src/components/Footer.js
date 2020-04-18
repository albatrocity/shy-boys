import React from "react";
import { Box } from "grommet";

import PolyvinylLogo from "./PolyvinylLogo";

const Footer = () => (
  <Box direction="row" style={{ position: "relative" }}>
    <Box>
      <PolyvinylLogo color="dark-1" size="xlarge" />
    </Box>
    <Box>Contact</Box>
  </Box>
);

export default Footer;
