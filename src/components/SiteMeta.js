import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";

import Butterfly3 from "./Butterfly3";
import Footer from "./Footer";

const SiteMeta = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  return (
    <Box
      as="footer"
      margin={{ vertical: "small" }}
      pad={isSmall ? "medium" : { horizontal: "small" }}
      border={{ side: isSmall ? "top" : "left", style: "dashed" }}
      width="medium"
      style={{ position: "relative" }}
    >
      <Butterfly3 />
      <Box flex={{ grow: 1 }}></Box>
      <Footer />
    </Box>
  );
};

export default SiteMeta;
