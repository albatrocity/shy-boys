import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";

import PolyvinylLogo from "./PolyvinylLogo";

const Footer = () => (
  <Box
    direction="row"
    style={{ position: "relative" }}
    justify="between"
    align="end"
    gap="xsmall"
  >
    <Box align="end" justify="start" align="start">
      <PolyvinylLogo color="dark-1" style={{ width: "75px" }} />
    </Box>
    <Box gap="small">
      <Box align="end">
        <Heading margin="0" level={4}>
          Contact
        </Heading>
        <Anchor color="black" href="mailto:shyboyskc@gmail.com">
          <Text
            size="small"
            textAlign="end"
            weight={400}
            style={{ lineHeight: "0.8rem" }}
          >
            ShyBoysKC@gmail.com
          </Text>
        </Anchor>
      </Box>
      <Box align="end">
        <Heading margin="0" level={4}>
          Booking
        </Heading>
        <Anchor href="mailto:john@groundcontroltouring.com" color="black">
          <Text
            textAlign="end"
            weight={400}
            size="small"
            style={{ lineHeight: "0.8rem" }}
          >
            John Chavez, Ground Control
          </Text>
        </Anchor>
      </Box>
    </Box>
  </Box>
);

export default Footer;
