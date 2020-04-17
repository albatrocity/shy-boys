import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";
import styled from "styled-components";

import VerticalLogo from "./VerticalLogo";

const Stripes = styled(Box)`
  background-size: 39.5%;
  width: 100%;
  background-position-x: 0;
  background-repeat: repeat-y;
`;
const StripesContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 160px;
  position: absolute;
  top: 0;
  left: 0;
`;

const BrandSidebar = () => {
  const size = useContext(ResponsiveContext);
  const isMobile = size === "small";

  return (
    <Box
      direction="column"
      as="aside"
      width={isMobile ? "auto" : "12vw"}
      fill="vertical"
      style={isMobile ? {} : { maxWidth: "160px" }}
    >
      <Box
        flex={{ grow: 1, shrink: 0 }}
        justify="end"
        align="end"
        fill
        pad={
          isMobile
            ? { top: "medium" }
            : { bottom: "80px", horizontal: "medium" }
        }
      >
        {!isMobile && (
          <Box
            flex={{ grow: 1, shrink: 1 }}
            overflow="hidden"
            width="100%"
            style={{ maxWidth: "160px", position: "relative" }}
          >
            <StripesContainer>
              <VerticalLogo clip />
            </StripesContainer>
          </Box>
        )}
        <Box flex={{ grow: 0, shrink: 1 }} fill="horizontal">
          <VerticalLogo rotate={isMobile ? true : false} />
        </Box>
      </Box>
    </Box>
  );
};

export default BrandSidebar;
