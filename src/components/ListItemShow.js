import React, { useContext } from "react"
import {
  Box,
  Heading,
  Text,
  Anchor,
  ThemeContext,
  Button,
  Paragraph,
} from "grommet"
import { format } from "date-fns"

const ListItemShow = ({
  url,
  datetime,
  description,
  venue,
  offers,
  lineup,
  on_sale_datetime,
}) => {
  return (
    <Box direction="row-responsive" gap="small">
      <Box className="shows-show-date">
        <a href={url}>
          <Heading level={4} className="short-date">
            {format(datetime, "M/D")}
          </Heading>
          <Heading level={4} className="full-date">
            {format(datetime, "MMMM Do")}
          </Heading>
        </a>
      </Box>
      <Box className="shows-show-info">
        <a href={url}>
          <Heading level={4}>
            {venue.city}, {venue.region} @ {venue.name}
          </Heading>
        </a>
        <Paragraph>{description !== "Shy Boys" ? description : null}</Paragraph>
      </Box>
      <Box className="shows-show-actions">
        {offers.map(x => (
          <Button key={x.url} href={x.url} label={x.type} />
        ))}
      </Box>
    </Box>
  )
}

export default ListItemShow
