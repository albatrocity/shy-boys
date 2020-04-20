import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";

import Shows from "./Shows";
import Releases from "./Releases";

const IndexPageContent = ({ content }) => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  return (
    <Box
      direction="row-responsive"
      flex={{ grow: 1, shrink: 1 }}
      gap={isSmall ? "xlarge" : "small"}
    >
      <Box direction="column" flex={{ shrink: 1, grow: 1 }}>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          flex={{ grow: 1 }}
        ></div>
        <Box overflow={isSmall ? null : "auto"}>
          <Shows />
        </Box>
      </Box>
      <Box
        border={isSmall ? 0 : { side: "left", style: "dashed" }}
        pad={isSmall ? "0" : { left: "small" }}
        width={isSmall ? "100%" : "300px"}
        flex={{ shrink: 0 }}
      >
        <Releases />
      </Box>
    </Box>
  );
};

export default IndexPageContent;
