import React, { useContext } from "react"
import { Box, Heading, Text, Anchor, ThemeContext } from "grommet"
import { SocialIcon } from "react-social-icons"
import { FaSpotify, FaApple } from "react-icons/fa"
import Img from "gatsby-image"

import IconDisc from "./IconDisc"

const ListItemRelease = ({
  title,
  format,
  label,
  year,
  physical,
  spotify,
  apm,
  image,
  first,
}) => {
  const theme = useContext(ThemeContext)
  return (
    <Box
      direction="row"
      gap="small"
      pad={first ? {} : { top: "small" }}
      medium={first ? {} : { top: "small" }}
      border={first ? null : { side: "top", style: "dashed" }}
    >
      <Box width="110px" flex={{ shrink: 0 }}>
        <Img fluid={image.childImageSharp.fluid} />
      </Box>
      <Box flex={{ grow: 1, shrink: 1 }} justify="end">
        <Box flex={{ grow: 1 }} justify="center" wrap={true}>
          <Heading level={4} margin="0">
            <span style={{ paddingRight: theme.global.edgeSize.xsmall }}>
              {title}
            </span>
            <Text
              size="xsmall"
              style={{ fontFamily: "noort, serif" }}
              weight={500}
            >
              {format}
            </Text>
          </Heading>
          <Text size="xsmall">{label}</Text>
        </Box>
        <Box
          className="links"
          direction="row"
          fill="horizontal"
          wrap
          gap="medium"
          align="center"
          justify="start"
        >
          {physical && (
            <a href={physical} target="_blank">
              <IconDisc color="dark-1" size="medium" alt={title} />
            </a>
          )}
          {spotify && (
            <a href={spotify} target="_blank">
              <FaSpotify
                size={theme.global.edgeSize.medium}
                color={theme.global.colors["dark-1"]}
                alt={title}
              />
            </a>
          )}
          {apm && (
            <a href={spotify} target="_blank">
              <FaApple
                size={theme.global.edgeSize.medium}
                color={theme.global.colors["dark-1"]}
                alt={title}
              />
            </a>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ListItemRelease
